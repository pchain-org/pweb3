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

import {AbstractWeb3Module, Web3ModuleOptions} from 'web3-core';
import {provider} from 'web3-providers';
import * as net from 'net';

export class Del extends AbstractWeb3Module {

    constructor(
        provider: provider,
        net?: net.Socket|null,
        options?: Web3ModuleOptions
    );

    checkCandidate(address: string,defaultBlock?: number | string,callback?: (error: Error, result: string) => void): Promise<string>;

    delegate(address: string,candidate: string,amount: string,callback?: (error: Error, result: string) => void): Promise<string>;

    cancelDelegate(address: string,candidate: string,amount: string,callback?: (error: Error, result: string) => void): Promise<string>;

    applyCandidate(address: string,securityDeposit: string,commission: string,callback?: (error: Error, result: string) => void): Promise<string>;

    cancelCandidate(address: string,callback?: (error: Error, result: string) => void): Promise<string>;

}
