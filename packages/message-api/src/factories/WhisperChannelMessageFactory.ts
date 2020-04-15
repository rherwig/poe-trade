import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import WhisperChannelMessage from '../models/messages/WhisperChannelMessage';
import IncomingWhisperMessage from '../models/messages/IncomingWhisperMessage';
import OutgoingWhisperMessage from '../models/messages/OutgoingWhisperMessage';

@Service('WhisperChannelMessageFactory')
export default class WhisperChannelMessageFactory implements IFactory<string, WhisperChannelMessage> {

    public create(payload: string): WhisperChannelMessage {
        if (payload.startsWith('@From')) {
            return new IncomingWhisperMessage(payload);
        }

        return new OutgoingWhisperMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith('@');
    }

}
