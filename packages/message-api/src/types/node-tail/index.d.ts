declare module 'tail' {
    export class Tail {
        constructor(path: string);
        public on(event: string, callback: (data: string) => void): void;
        public watch(): void;
        public unwatch(): void;
    }
}
