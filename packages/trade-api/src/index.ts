import 'reflect-metadata';

import { Container } from 'typedi';
import watch from '@pathofexile/message-api';
import { IConfiguration } from '@pathofexile/message-api/lib/interfaces/IConfiguration';
import WhisperChannelMessage from '@pathofexile/message-api/lib/models/messages/WhisperChannelMessage';

import TradeMessageFactory from './factories/TradeMessageFactory';
import registerLoaders from './loaders';
import AbstractTradeMessage from './models/AbstractTradeMessage';

export default async (
    config: IConfiguration,
    callback: (err: string | null, message: AbstractTradeMessage | null) => void,
) => {
    await registerLoaders();

    const tradeMessageFactory = Container.get<TradeMessageFactory>(TradeMessageFactory);

    return watch(config, (err, envelope) => {
        if (err) {
            return err;
        }

        const message = envelope?.getMessage();
        if (message && message instanceof WhisperChannelMessage) {
            const tradeMessage = tradeMessageFactory.create(message);
            callback(null, tradeMessage);
        }
    });
};
