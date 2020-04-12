import AbstractMessage from './AbstractMessage';

export default class GuildChannelMessage extends AbstractMessage {
    constructor(payload: string) {
        super(payload, {
            prefix: '&',
        });
    }
}
