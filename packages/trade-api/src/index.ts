import 'reflect-metadata';

import watch from '@pathofexile/message-api';
import { IConfiguration } from '@pathofexile/message-api/src/interfaces/IConfiguration';
import { Container } from 'typedi';

import TradeMessageFactory from './factories/TradeMessageFactory';
import registerLoaders from './loaders';
import OutgoingWhisperMessage from '../../message-api/src/models/messages/OutgoingWhisperMessage';
import WhisperChannelMessage from '@pathofexile/message-api/src/models/messages/WhisperChannelMessage';

export default async (config: IConfiguration) => {
    await registerLoaders();

    const tradeMessageFactory = Container.get<TradeMessageFactory>(TradeMessageFactory);

    return watch(config, (err, envelope) => {
        if (err) {
            return err;
        }

        const message = envelope?.getMessage();
        if (message && message instanceof WhisperChannelMessage) {
            const tradeMessage = tradeMessageFactory.create(message);
            console.log(tradeMessage);
        }
    });
};
