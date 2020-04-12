import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import PartyChannelMessage from '../models/messages/PartyChannelMessage';

@Service('PartyChannelMessageFactory')
export default class PartyChannelMessageFactory implements IFactory<PartyChannelMessage> {

    public create(payload: string): PartyChannelMessage {
        return new PartyChannelMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith('%');
    }

}
