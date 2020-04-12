import 'reflect-metadata';
import { resolve } from 'path';
import { Container } from 'typedi';

import { IConfiguration } from './interfaces/IConfiguration';
import loaders from './loaders';
import LogTailService from './services/LogTailService';
import EnvelopeFactory from './factories/EnvelopeFactory';

const config: IConfiguration = {
    logPath: resolve('M:\\', 'Games', 'PoE', 'logs', 'Client.txt'),
};

(async () => {
    await loaders(config);

    const logTailService = Container.get<LogTailService>(LogTailService);
    const envelopeFactory = Container.get<EnvelopeFactory>(EnvelopeFactory);

    const handleError = (err: string) => {
        console.error(err);
    };

    const handleLine = (line: string) => {
        const envelope = envelopeFactory.create(line);
        console.log(envelope);
    };

    logTailService.watch(handleError, handleLine);

    process.on('SIGINT', () => {
        console.info('Process exiting gracefully...');
        logTailService.unwatch();
        process.exit();
    });
})();
