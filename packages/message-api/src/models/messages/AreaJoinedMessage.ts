import ControlMessage from './ControlMessage';
import { AREA_JOINED_MESSAGE_REGEX } from '../../utils/regex';

export default class AreaJoinedMessage extends ControlMessage {
    constructor(payload: string) {
        const playerRegex = AREA_JOINED_MESSAGE_REGEX;
        const payloadRegex = null;

        super(payload, {
            payloadRegex,
            playerRegex,
        });
    }

    protected getName(): string {
        return 'AreaJoinedMessage';
    }
}
