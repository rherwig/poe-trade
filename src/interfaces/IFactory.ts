export interface IFactory<T> {
    create(payload: string): T;
    supports(payload: string): boolean;
}
