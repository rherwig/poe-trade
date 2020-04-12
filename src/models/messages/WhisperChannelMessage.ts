import AbstractMessage from './AbstractMessage';

export default abstract class WhisperChannelMessage extends AbstractMessage {
    protected constructor(payload: string, prefix: string = '@') {
        super(payload, {
            prefix,
        });
    }
}
