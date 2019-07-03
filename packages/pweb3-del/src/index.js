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
 * @file Del.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
import {Network} from 'web3-net';
import * as Utils from 'web3-utils';
import {formatters} from 'web3-core-helpers';
import MethodFactory from './factories/MethodFactory';
import DelModule from './Del.js';
import {ProviderResolver} from 'web3-providers';
import SubscriptionsFactory from "../../pweb3-tdm/src/factories/SubscriptionsFactory";

/**
 * Creates the Del Object
 *
 * @method Del
 *
 * @param {Web3EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
 * @param {Net.Socket} net
 * @param {Object} options
 *
 * @returns {Tdm}
 */
export function Del(provider, net = null, options = {}) {
    const resolvedProvider = new ProviderResolver().resolve(provider, net);

    return new DelModule(
        resolvedProvider,
        new MethodFactory(Utils, formatters),
        new SubscriptionsFactory(Utils, formatters),
        new Network(resolvedProvider, null, options),
        options,
        null
    );
}
