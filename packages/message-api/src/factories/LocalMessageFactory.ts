import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import LocalChannelMessage from '../models/messages/LocalChannelMessage';

@Service('LocalMessageFactory')
export default class LocalMessageFactory implements IFactory<string, LocalChannelMessage> {

    public create(payload: string): LocalChannelMessage {
        return new LocalChannelMessage(payload);
    }

    public supports(payload: string): boolean {
        return /^\S+:.+$/.test(payload);
    }

}
