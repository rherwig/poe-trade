import { Service, Inject } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import { EMessageLevel } from '../enums/EMessageLevel';
import { EMessageLayer } from '../enums/EMessageLayer';
import Envelope from '../models/Envelope';
import AbstractMessage from '../models/messages/AbstractMessage';
import UnmatchedMessage from '../models/messages/UnmatchedMessage';
import WhisperChannelMessageFactory from './WhisperChannelMessageFactory';
import LocalMessageFactory from './LocalMessageFactory';
import ControlMessageFactory from './ControlMessageFactory';
import GuildChannelMessageFactory from './GuildChannelMessageFactory';
import TradeChannelMessageFactory from './TradeChannelMessageFactory';
import PartyChannelMessageFactory from './PartyChannelMessageFactory';
import GlobalChannelMessageFactory from './GlobalChannelMessageFactory';

@Service('EnvelopeFactory')
export default class EnvelopeFactory implements IFactory<Envelope> {

    private readonly messageFactories: IFactory<AbstractMessage>[];

    constructor(
        @Inject('WhisperChannelMessageFactory') whisperMessageFactory: WhisperChannelMessageFactory,
        @Inject('ControlMessageFactory') controlMessageFactory: ControlMessageFactory,
        @Inject('PartyChannelMessageFactory') partyChannelMessageFactory: PartyChannelMessageFactory,
        @Inject('GuildChannelMessageFactory') guildChannelMessageFactory: GuildChannelMessageFactory,
        @Inject('LocalMessageFactory') localMessageFactory: LocalMessageFactory,
        @Inject('GlobalChannelMessageFactory') globalChannelMessageFactory: GlobalChannelMessageFactory,
        @Inject('TradeChannelMessageFactory') tradeChannelMessageFactory: TradeChannelMessageFactory,
    ) {
        this.messageFactories = [
            whisperMessageFactory,
            localMessageFactory,
            controlMessageFactory,
            partyChannelMessageFactory,
            guildChannelMessageFactory,
            localMessageFactory,
            globalChannelMessageFactory,
            tradeChannelMessageFactory,
        ];
    }

    /**
     * Creates an Envelope containg an UnmatchedMessage based on the raw
     * line input from the PoE logs.
     * @param payload
     */
    public create(payload: string): Envelope {
        const [
            _date,
            _time,
            _id,
            _meta,
            _level,
            _layer,
            _clientId,
            ..._message
        ] = payload.split(' ');

        const id = parseInt(_id, 10);
        const time = new Date(`${_date} ${_time}`);
        const level = _level.replace('[', '') as EMessageLevel;
        const layer = _layer as EMessageLayer;
        const clientId = parseInt(_clientId, 10);
        const _payload = _message.join(' ');

        const factory = this.getSupportingFactory(_payload);
        const message = factory
            ? factory.create(_payload)
            : new UnmatchedMessage(_payload);

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

    public getSupportingFactory(payload: string): IFactory<AbstractMessage> | undefined {
        return this.messageFactories.find((factory) => {
            return factory.supports(payload);
        });
    }

    public supports(payload: string): boolean {
        return false;
    }

}
