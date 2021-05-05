import { BrowserWindow } from 'electron';

export default (): BrowserWindow => {
    return new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            devTools: process.env.NODE_ENV === 'development',
        },
    });
};
