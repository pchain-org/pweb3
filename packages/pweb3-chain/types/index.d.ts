/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author lzhao
 * @date 2019
 */

import {AbstractWeb3Module, Web3ModuleOptions} from 'pweb3-core';
import {provider} from 'pweb3-providers';
import * as net from 'net';

export class Chain extends AbstractWeb3Module {

    constructor(
        provider: provider,
        net?: net.Socket|null,
        options?: Web3ModuleOptions
    );

    createChildChain(address: string,chainId: string,minValidators: string,minDepositAmount: string,startBlock: string,endBlock: string,callback?: (error: Error, result: string) => void): Promise<string>;

    joinChildChain(address: string,pubkey: string,chainId: string,depositAmount: string,signature: string,callback?: (error: Error, result: string) => void): Promise<string>;

    depositInMainChain(address: string,chainId: string,amount: string,callback?: (error: Error, result: string) => void): Promise<string>;

    depositInChildChain(address: string,transactionHash: string,callback?: (error: Error, result: string) => void): Promise<string>;

    withdrawFromChildChain(address: string,amount: string,callback?: (error: Error, result: string) => void): Promise<string>;

    withdrawFromMainChain(address: string,amount: string,chainId: string,transactionHash: string,callback?: (error: Error, result: string) => void): Promise<string>;

    signAddress(address: string,privateKey: string,callback?: (error: Error, result: string) => void): Promise<string>;

    setBlockReward(address: string,reward: string,callback?: (error: Error, result: string) => void): Promise<string>;

    getBlockReward(defaultBlock?: number | string,callback?: (error: Error, result: string) => void): Promise<string>;

    getAllChains(callback?: (error: Error, result: string) => void): Promise<string>;

}
