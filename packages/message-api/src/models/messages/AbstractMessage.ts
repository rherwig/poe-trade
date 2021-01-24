import Player from '../Player';
import { IMessageParserOptions } from '../../interfaces/IMessageParserOptions';

export default abstract class AbstractMessage {
    protected payload: string;
    protected player: Player | null;

    protected constructor(payload: string, parserOptions: IMessageParserOptions = {}) {
        const { prefix, payloadRegex, playerRegex } = parserOptions;

        let _prefix = prefix || '';
        let _payloadRegex = typeof payloadRegex === 'undefined'
            ? new RegExp(`${_prefix || ''}.*?:\\s(.*)`)
            : payloadRegex;
        let _playerRegex = typeof playerRegex === 'undefined'
            ? new RegExp(`${_prefix || ''}\\s?(.*?):`)
            : playerRegex;

        this.payload = _payloadRegex
            ? this.parsePayload(payload, _payloadRegex)
            : '';
        this.player = _playerRegex
            ? this.parsePlayer(payload, _playerRegex)
            : null;
    }

    protected parsePlayer(payload: string, regex: RegExp): Player | null {
        const [ _, sender ] = payload.match(regex) || [];

        return sender ? Player.fromSender(sender) : null;
    }

    protected parsePayload(payload: string, regex: RegExp): string {
        const [ _, _payload ] = payload.match(regex) || [];

        return _payload || payload;
    }

    protected abstract getName(): string;

    public getPlayer(): Player | null {
        return this.player;
    }

    public getPayload(): string {
        return this.payload;
    }
}
