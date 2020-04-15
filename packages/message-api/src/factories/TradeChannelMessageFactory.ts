import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import TradeChannelMessage from '../models/messages/TradeChannelMessage';

@Service('TradeChannelMessageFactory')
export default class TradeChannelMessageFactory implements IFactory<string, TradeChannelMessage> {

    public create(payload: string): TradeChannelMessage {
        return new TradeChannelMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith('$');
    }

}
