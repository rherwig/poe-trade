import AbstractMessage from './AbstractMessage';

export default class TradeChannelMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload, {
            prefix: '\\$',
        });
    }

    protected getName(): string {
        return 'TradeChannelMessage';
    }
}
