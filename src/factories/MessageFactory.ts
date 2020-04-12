import { EMessageLevel } from '../enums/EMessageLevel';
import { EMessageLayer } from '../enums/EMessageLayer';
import { IMessage } from '../interfaces/IMessage';
import Envelope from '../models/Envelope';
import UnmatchedMessage from '../models/UnmatchedMessage';
import GlobalChannelMessage from '../models/GlobalChannelMessage';
import TradeChannelMessage from '../models/TradeChannelMessage';
import GuildChannelMessage from '../models/GuildChannelMessage';
import PartyChannelMessage from '../models/PartyChannelMessage';
import IncomingWhisperMessage from '../models/IncomingWhisperMessage';
import OutgoingWhisperMessage from '../models/OutgoingWhisperMessage';
import ControlMessage from '../models/ControlMessage';
import LocalChannelMessage from '../models/LocalChannelMessage';
import AbstractMessage from '../models/AbstractMessage';

export default class MessageFactory {
    public static fromLogLine(line: string): Envelope {
        const [
            _date,
            _time,
            _id,
            _meta,
            _level,
            _layer,
            _clientId,
            ..._message
        ] = line.split(' ');

        const id = parseInt(_id, 10);
        const time = new Date(`${_date} ${_time}`);
        const level = _level.replace('[', '') as EMessageLevel;
        const layer = _layer as EMessageLayer;
        const clientId = parseInt(_clientId, 10);
        const payload = _message.join(' ');

        const message = MessageFactory.createMessage(payload);

        return new Envelope(
            id,
            time,
            level,
            layer,
            _meta,
            clientId,
            message,
        );
    }

    public static createMessage(payload: string): AbstractMessage {
        if (payload.startsWith('@')) {
            return new IncomingWhisperMessage(payload);
        }

        if (payload.startsWith('#')) {
            return new GlobalChannelMessage(payload);
        }

        if (payload.startsWith('$')) {
            return new TradeChannelMessage(payload);
        }

        if (payload.startsWith('%')) {
            return new PartyChannelMessage(payload);
        }

        if (payload.startsWith('&')) {
            return new GuildChannelMessage(payload);
        }

        if (payload.startsWith(':')) {
            return new ControlMessage(payload);
        }

        const regex = /^\S+:.+$/;
        const isLocalMessage = regex.test(payload);
        if (isLocalMessage) {
            return new LocalChannelMessage(payload);
        }

        return new UnmatchedMessage(payload);
    }
}
