import { Container } from 'typedi';

import { IConfiguration } from '../interfaces/IConfiguration';
import Envelope from '../models/Envelope';
import Player from '../models/Player';
import MessageModels from '../models/messages';

export default async (config: IConfiguration) => {
    Container.set('logPath', config.logPath);
    Container.set(Envelope.name, Envelope);
    Container.set(Player.name, Player);

    MessageModels.forEach((Model) => {
        Container.set(Model.name, Model);
    });
};
