import WhisperChannelMessage from './WhisperChannelMessage';

export default class OutgoingWhisperMessage extends WhisperChannelMessage {
    constructor(payload: string) {
        super(payload, '@To');
    }
}
