export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    static readonly ETHER: Currency;
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHER: Currency;

export { ETHER };
