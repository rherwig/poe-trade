import AbstractMessage from './AbstractMessage';

export default class PartyChannelMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload, {
            prefix: '%',
        });
    }

    protected getName(): string {
        return 'PartyChannelMessage';
    }
}
