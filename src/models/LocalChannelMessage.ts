import AbstractMessage from './AbstractMessage';

export default class LocalChannelMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload);
    }
}
