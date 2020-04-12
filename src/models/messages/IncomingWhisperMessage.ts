import WhisperChannelMessage from './WhisperChannelMessage';

export default class IncomingWhisperMessage extends WhisperChannelMessage {
    constructor(payload: string) {
        super(payload, '@From');
    }

    protected getName(): string {
        return 'IncomingWhisperMessage';
    }
}
