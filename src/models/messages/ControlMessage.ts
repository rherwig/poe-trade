import AbstractMessage from './AbstractMessage';

export default class ControlMessage extends AbstractMessage {
    constructor(payload: string) {
        const prefix = ':';
        const payloadRegex = new RegExp(`(?:${prefix}\\s?)(.*)`);

        super(payload, {
            prefix,
            payloadRegex,
            playerRegex: null,
        });
    }

    protected getName(): string {
        return 'ControlMessage';
    }
}
