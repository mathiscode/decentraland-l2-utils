/// <reference types="env" />
import * as eth from 'eth-connect';
export declare type Providers = {
    requestManager: eth.RequestManager;
    metaRequestManager: eth.RequestManager;
    fromAddress: string;
};
export declare type Options = {
    serverURL: string;
};
export interface IMANAComponents {
    balance: (from?: string) => Promise<string>;
    allowance: (spenderAddress: string, from?: string) => Promise<string>;
    approve: (spenderAddress: string, amount?: eth.BigNumber, options?: Options) => Promise<string>;
    transfer: (to: string, amount: eth.BigNumber, options?: Options) => Promise<string>;
}
export declare function createMANAComponent({ requestManager, metaRequestManager, fromAddress, }: Providers): IMANAComponents;
