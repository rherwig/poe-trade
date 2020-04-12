import AbstractMessage from '../models/AbstractMessage';

export interface IMessage {
    new(payload: string): AbstractMessage;
}
