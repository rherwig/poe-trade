import AbstractMessage from './AbstractMessage';

export default class UnmatchedMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload, {
            prefix: '',
            payloadRegex: new RegExp('(.*)'),
            playerRegex: null,
        });
    }

    protected getName(): string {
        return 'UnmatchedMessage';
    }
}
