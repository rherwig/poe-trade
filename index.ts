import { resolve } from 'path';
import { IConfiguration } from './src/interfaces/IConfiguration';
import watch from './src';

const config: IConfiguration = {
    logPath: resolve('M:\\', 'Games', 'PoE', 'logs', 'Client.txt'),
};

watch(config, (err, message) => {
    if (err) {
        return console.error(err);
    }

    console.info(message);
}).catch(err => {
    console.log(err);
});
