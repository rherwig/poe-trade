export interface IFactory<T, U> {
    create(payload: T): U;
    supports(payload: T): boolean;
}
