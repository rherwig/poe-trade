import ControlMessage from './ControlMessage';
import { AREA_LEFT_MESSAGE_REGEX } from '../../utils/regex';

export default class AreaLeftMessage extends ControlMessage {
    constructor(payload: string) {
        const playerRegex = AREA_LEFT_MESSAGE_REGEX;
        const payloadRegex = null;

        super(payload, {
            payloadRegex,
            playerRegex,
        });
    }

    protected getName(): string {
        return 'AreaLeftMessage';
    }
}
