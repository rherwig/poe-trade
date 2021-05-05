import { resolve } from 'path';
import watch from './packages/trade-api/lib';
import { IConfiguration } from './packages/message-api/lib/interfaces/IConfiguration';

const config: IConfiguration = {
    logPath: resolve('M:\\', 'Games', 'PoE', 'logs', 'Client.txt'),
};

const TEST_MESSAGE = '@From ritual_pielo: Hi, I would like to buy your Tabula Rasa Simple Robe listed for 5 chaos in Ritual (stash tab "sell"; position: left 1, top 10)';

(async () => {
    const watcher = await watch(config, (err, message) => {
        console.log(message);
    });

    watcher.simulate(TEST_MESSAGE);
})();
