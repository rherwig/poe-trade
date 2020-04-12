import AbstractMessage from './AbstractMessage';

export default class WhisperChannelMessage extends AbstractMessage {
    constructor(payload: string, prefix: string = '@') {
        super(payload, {
            prefix,
        });
    }
}
