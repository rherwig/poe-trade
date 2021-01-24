import { resolve } from 'path';
import { IConfiguration } from './packages/message-api/src/interfaces/IConfiguration';
import watch from './packages/trade-api/src';

const config: IConfiguration = {
    logPath: resolve('M:\\', 'Games', 'PoE', 'logs', 'Client.txt'),
};

const TEST_MESSAGE = '@From ritual_pielo: Hi, I would like to buy your Tabula Rasa Simple Robe listed for 5 chaos in Ritual (stash tab "sell"; position: left 1, top 10)';

(async () => {
    const watcher = await watch(config);

    watcher.simulate(TEST_MESSAGE);
})();
