import { Container } from 'typedi';

import models from '../models';

export default async () => {
    models.forEach((Model) => {
        Container.set(Model.name, Model);
    });
};
