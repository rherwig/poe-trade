import WhisperChannelMessage from './WhisperChannelMessage';

export default class IncomingWhisperMessage extends WhisperChannelMessage {
    constructor(payload: string) {
        super(payload, '@From');
    }
}
