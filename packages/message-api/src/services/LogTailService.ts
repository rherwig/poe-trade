import { Service, Inject } from 'typedi';
import { Tail } from 'tail';

@Service()
export default class LogTailService {

    private tail: Tail | null;
    private readonly logPath: string;

    constructor(
        @Inject('logPath') logPath: string,
    ) {
        this.logPath = logPath;
        this.tail = null;
    }

    watch(onError: (err: string) => void, onLine: (line: string) => void) {
        this.tail = new Tail(this.logPath);
        this.tail.on('error', onError);
        this.tail.on('line', onLine);
    }

    unwatch() {
        if (!this.tail) {
            return;
        }

        this.tail.unwatch();
    }
}
