import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import GlobalChannelMessage from '../models/messages/GlobalChannelMessage';

@Service('GlobalChannelMessageFactory')
export default class GlobalChannelMessageFactory implements IFactory<string, GlobalChannelMessage> {

    public create(payload: string): GlobalChannelMessage {
        return new GlobalChannelMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith('#');
    }

}
