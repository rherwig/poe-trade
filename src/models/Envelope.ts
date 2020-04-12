import { EMessageLevel } from '../enums/EMessageLevel';
import { EMessageLayer } from '../enums/EMessageLayer';
import AbstractMessage from './AbstractMessage';

export default class Envelope {
    private id: number;
    private time: Date;
    private level: EMessageLevel;
    private layer: EMessageLayer;
    private meta: string;
    private clientId: number;
    private message: AbstractMessage;

    constructor(
        id: number,
        time: Date,
        level: EMessageLevel,
        layer: EMessageLayer,
        meta: string,
        clientId: number,
        message: any,
    ) {
        this.id = id;
        this.time = time;
        this.level = level;
        this.layer = layer;
        this.meta = meta;
        this.clientId = clientId;
        this.message = message;
    }
}
