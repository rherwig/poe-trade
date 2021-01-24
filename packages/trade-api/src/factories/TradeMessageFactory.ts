import { Service } from 'typedi';
import WhisperChannelMessage from '@pathofexile/message-api/src/models/messages/WhisperChannelMessage';

import IncomingTradeMessage from '../models/IncomingTradeMessage';
import AbstractTradeMessage from '../models/AbstractTradeMessage';

@Service()
export default class TradeMessageFactory {
    private PAYLOAD_REGEX = /.*?your\s(\d*)\s?(.*)\slisted\sfor\s(\d+)\s(.*)\sin\s(.*)\s\(.*?"(.*?)".*left\s(\d+).*top\s(\d+)\)(.*)/;

    public create(message: WhisperChannelMessage): AbstractTradeMessage {
        const [
            _,
            productQuantity,
            productName,
            currencyQuantity,
            currencyName,
            leagueName,
            stashTabName,
            stashTabLeft,
            stashTabTop,
            comment,
        ] = message.getPayload().match(this.PAYLOAD_REGEX) || [];

        return new IncomingTradeMessage(
            'player',
            productName,
            parseInt(productQuantity, 10),
            currencyName,
            parseInt(currencyQuantity, 10),
            leagueName,
            stashTabName,
        );
    }
}
