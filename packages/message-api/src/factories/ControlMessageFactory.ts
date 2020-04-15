import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import {
    CONTROL_MESSAGE_REGEX,
    AREA_JOINED_MESSAGE_REGEX,
    AREA_LEFT_MESSAGE_REGEX,
} from '../utils/regex';
import ControlMessage from '../models/messages/ControlMessage';
import UnmatchedControlMessage from '../models/messages/UnmatchedControlMessage';
import AreaJoinedMessage from '../models/messages/AreaJoinedMessage';
import AreaLeftMessage from '../models/messages/AreaLeftMessage';

@Service('ControlMessageFactory')
export default class ControlMessageFactory implements IFactory<string, ControlMessage> {

    public create(payload: string): ControlMessage {
        const sanitized = payload.replace(/^:\s/, '');

        if (AREA_JOINED_MESSAGE_REGEX.test(sanitized)) {
            return new AreaJoinedMessage(sanitized);
        }

        if (AREA_LEFT_MESSAGE_REGEX.test(sanitized)) {
            return new AreaLeftMessage(sanitized);
        }

        return new UnmatchedControlMessage(payload);
    }

    public supports(payload: string): boolean {
        return CONTROL_MESSAGE_REGEX.test(payload);
    }

}
