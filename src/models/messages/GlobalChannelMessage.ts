import AbstractMessage from './AbstractMessage';

export default class GlobalChannelMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload, {
            prefix: '#',
        });
    }

    protected getName(): string {
        return 'GlobalChannelMessage';
    }
}
