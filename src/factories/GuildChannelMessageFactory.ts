import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import GuildChannelMessage from '../models/messages/GuildChannelMessage';

@Service('GuildChannelMessageFactory')
export default class GuildChannelMessageFactory implements IFactory<GuildChannelMessage> {

    public create(payload: string): GuildChannelMessage {
        return new GuildChannelMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith('&');
    }

}
