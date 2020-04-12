import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import WhisperChannelMessage from '../models/messages/WhisperChannelMessage';
import IncomingWhisperMessage from '../models/messages/IncomingWhisperMessage';

@Service('WhisperChannelMessageFactory')
export default class WhisperChannelMessageFactory implements IFactory<WhisperChannelMessage> {

    public create(payload: string): WhisperChannelMessage {
        return new IncomingWhisperMessage('');
    }

    public supports(payload: string): boolean {
        return payload.startsWith('@');
    }

}
