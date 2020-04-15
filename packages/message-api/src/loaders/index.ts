import { IConfiguration } from '../interfaces/IConfiguration';
import dependencyInjectionLoader from './dependency-injection';

export default async (config: IConfiguration) => {
    await dependencyInjectionLoader(config);
};
