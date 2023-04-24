/// <reference types="env" />
import * as eth from 'eth-connect';
import { ERC20Matic } from './erc20';
export declare function getDomainData(network: string): any[];
/**
 * Return Contract, Provider and RequestManager
 *
 * @param contractAddress Smartcontract ETH address
 */
export declare function getContract(contractAddress: eth.Address, requestManager?: eth.RequestManager): Promise<{
    contract: ERC20Matic;
    requestManager: eth.RequestManager;
}>;
export declare function balance(address?: string, network?: string, providerType?: string, providerEndpoint?: string, testnetProviderType?: string, testnetProviderEndpoint?: string): Promise<{
    l1: number;
    l2: number;
}>;
export declare function depositMana(amount: number, network?: string): Promise<string>;
export declare function sendMana(to: string, amount: number, network?: string, providerType?: string, providerEndpoint?: string, testnetProviderType?: string, testnetProviderEndpoint?: string, metaTxServer?: string): Promise<unknown>;
