import { createServer, ViteDevServer } from 'vite';
import { resolve } from 'path';

/**
 * Spawns a dev-server using ViteJS.
 */
export default async (): Promise<ViteDevServer> => {
    const server = await createServer({
        configFile: resolve(__dirname, '..', '..', '..', 'vite.config.ts'),
    });

    return server.listen();
};
