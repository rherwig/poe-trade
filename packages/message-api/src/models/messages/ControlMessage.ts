import AbstractMessage from './AbstractMessage';
import { IMessageParserOptions } from '../../interfaces/IMessageParserOptions';

export default abstract class ControlMessage extends AbstractMessage {
    protected constructor(payload: string, parserOptions: IMessageParserOptions = {}) {
        super(payload, parserOptions);
    }
}
