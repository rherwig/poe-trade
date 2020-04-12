import { Service } from 'typedi';

import { IFactory } from '../interfaces/IFactory';
import ControlMessage from '../models/messages/ControlMessage';

@Service('ControlMessageFactory')
export default class ControlMessageFactory implements IFactory<ControlMessage> {

    public create(payload: string): ControlMessage {
        return new ControlMessage(payload);
    }

    public supports(payload: string): boolean {
        return payload.startsWith(':');
    }

}
