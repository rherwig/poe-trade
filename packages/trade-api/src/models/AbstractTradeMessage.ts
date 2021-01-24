export default class AbstractTradeMessage {
    private playerName: string;
    private productName: string;
    private productQuantity: number = 1;
    private currencyName: string;
    private currencyQuantity: number = 1;
    private leagueName: string;
    private stashTabName?: string;
    private stashTabPosition?: string;

    constructor(
        playerName: string,
        productName: string,
        productQuantity: number,
        currencyName: string,
        currencyQuantity: number,
        leagueName: string,
        stashTabName?: string,
        stashTabPosition?: string,
    ) {
        this.playerName = playerName;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.currencyName = currencyName;
        this.currencyQuantity = currencyQuantity;
        this.stashTabName = stashTabName;
        this.stashTabPosition = stashTabPosition;
        this.leagueName = leagueName;
    }

    public getProductName(): string {
        return this.productName;
    }

    public setProductName(productName: string): void {
        this.productName = productName;
    }

    public getProductQuantity(): number {
        return this.productQuantity;
    }

    public setProductQuantity(productQuantity: number): void {
        this.productQuantity = productQuantity;
    }
}
