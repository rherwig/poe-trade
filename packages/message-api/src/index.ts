import 'reflect-metadata';
import { Container } from 'typedi';

import { IConfiguration } from './interfaces/IConfiguration';
import LogTailService from './services/LogTailService';
import EnvelopeFactory from './factories/EnvelopeFactory';
import Envelope from './models/Envelope';
import loaders from './loaders';

export default async (
    config: IConfiguration,
    callback: (err: string | null, message: Envelope | null) => void,
) => {
    await loaders(config);

    const logTailService = Container.get<LogTailService>(LogTailService);
    const envelopeFactory = Container.get<EnvelopeFactory>(EnvelopeFactory);

    const handleError = (err: string) => {
        return callback(err, null);
    };

    const handleLine = (line: string) => {
        const envelope = envelopeFactory.create(line);
        return callback(null, envelope)
    };

    logTailService.watch(handleError, handleLine);

    process.on('SIGINT', () => {
        logTailService.unwatch();
        process.exit();
    });

    const simulate = (
        line: string,
        prefix: string = '2000/01/01 00:00:00 111111111 aaa [INFO Client 1000]',
    ) => {
        return handleLine(`${prefix} ${line}`);
    }

    return {
        simulate,
    };
};
