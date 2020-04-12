import { resolve } from 'path';
import { Tail } from 'tail';

import MessageFactory from './factories/MessageFactory';

const POE_GAME_PATH = resolve('M:\\', 'Games', 'PoE');
const POE_LOGS_PATH = resolve(POE_GAME_PATH, 'logs');
const POE_CLIENT_LOG_PATH = resolve(POE_LOGS_PATH, 'Client.txt');

const tail = new Tail(POE_CLIENT_LOG_PATH);

tail.on('line', (data) => {
    console.log(MessageFactory.fromLogLine(data));
});

tail.on('error', (data) => {
    console.error('Log Error', data);
});

process.on('SIGINT', () => {
    console.info('Process exiting gracefully...');
    tail.unwatch();
    process.exit();
});
