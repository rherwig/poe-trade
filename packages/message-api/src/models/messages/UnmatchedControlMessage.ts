import ControlMessage from './ControlMessage';

export default class UnmatchedControlMessage extends ControlMessage {
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
        return 'UnmatchedControlMessage';
    }
}
