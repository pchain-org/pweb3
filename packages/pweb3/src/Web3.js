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
 * @file index.js
 * @authors: Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
// TODO: Export here a web3 namespace with context handling possibilities and not a object and remove the factory
// TODO: objects and do them the functional way because of the tree shaking.
// TODO: Move the folders back to simpler structure e.g.: "packages/core/<methods|subscriptions|providers>"
import {AbstractWeb3Module} from 'pweb3-core';
import {ProviderDetector, ProvidersModuleFactory} from 'pweb3-providers';
import * as Utils from 'pweb3-utils';
import {Eth} from 'web3-eth';
import {Pi} from 'pweb3-pi';
import {Shh} from 'pweb3-shh';
import {Network} from 'pweb3-net';
import {Personal} from 'web3-eth-personal';
import {Tdm} from 'pweb3-tdm';
import {Chain} from 'pweb3-chain';
import {Del} from 'pweb3-del';
import {version} from '../package.json';
var CryptoJS = require('crypto-js');
var sha3 = require('crypto-js/sha3');

export default class Web3 extends AbstractWeb3Module {
    /**
     * @param {AbstractSocketProvider|HttpProvider|CustomProvider|String} provider
     * @param {Net} net
     * @param {Object} options
     *
     * @constructor
     */
    constructor(provider, net, options = {}) {
        super(provider, options, null, net);
        this.eth = new Eth(this.currentProvider, net, options);
        this.shh = new Shh(this.currentProvider, net, options);
        this.tdm = new Tdm(this.currentProvider, net, options);
        this.chain = new Chain(this.currentProvider, net, options);
        this.del = new Del(this.currentProvider, net, options);
        this.pi = new Pi(this.currentProvider, net, options);
        this.utils = Utils;
        this.version = version;
    }

    /**
     * Returns the Accounts module from the Eth module
     *
     * @property accounts
     *
     * @returns {Accounts}
     */
    get accounts() {
        return this.eth.accounts;
    }

    /**
     * Sets the defaultGasPrice property on the eth module and also on the shh module
     *
     * @property defaultGasPrice
     *
     * @param {String} value
     */
    set defaultGasPrice(value) {
        super.defaultGasPrice = value;
        this.eth.defaultGasPrice = value;
        this.shh.defaultGasPrice = value;
    }

    /**
     * Gets the defaultGasPrice property
     *
     * @property defaultGasPrice
     *
     * @returns {String|Number} value
     */
    get defaultGasPrice() {
        return super.defaultGasPrice;
    }

    /**
     * Sets the defaultGas property on the eth module and also on the shh module
     *
     * @property defaultGas
     *
     * @param {Number} value
     */
    set defaultGas(value) {
        super.defaultGas = value;
        this.eth.defaultGas = value;
        this.shh.defaultGas = value;
    }

    /**
     * Gets the defaultGas property
     *
     * @property defaultGas
     *
     * @returns {String|Number} value
     */
    get defaultGas() {
        return super.defaultGas;
    }

    /**
     * Sets the transactionBlockTimeout property on all contracts and on all sub-modules
     *
     * @property transactionBlockTimeout
     *
     * @param {Number} value
     */
    set transactionBlockTimeout(value) {
        super.transactionBlockTimeout = value;
        this.eth.transactionBlockTimeout = value;
        this.shh.transactionBlockTimeout = value;
    }

    /**
     * Gets the transactionBlockTimeout property
     *
     * @property transactionBlockTimeout
     *
     * @returns {Number} value
     */
    get transactionBlockTimeout() {
        return super.transactionBlockTimeout;
    }

    /**
     * Sets the transactionConfirmationBlocks property on all contracts and on all sub-modules
     *
     * @property transactionConfirmationBlocks
     *
     * @param {Number} value
     */
    set transactionConfirmationBlocks(value) {
        super.transactionConfirmationBlocks = value;
        this.eth.transactionConfirmationBlocks = value;
        this.shh.transactionConfirmationBlocks = value;
    }

    /**
     * Gets the transactionConfirmationBlocks property
     *
     * @property transactionConfirmationBlocks
     *
     * @returns {Number} value
     */
    get transactionConfirmationBlocks() {
        return super.transactionConfirmationBlocks;
    }

    /**
     * Sets the transactionConfirmationBlocks property on all contracts and on all sub-modules
     *
     * @property transactionConfirmationBlocks
     *
     * @param {Number} value
     */
    set transactionPollingTimeout(value) {
        super.transactionPollingTimeout = value;
        this.eth.transactionPollingTimeout = value;
        this.shh.transactionPollingTimeout = value;
    }

    /**
     * Gets the transactionPollingTimeout property
     *
     * @property transactionPollingTimeout
     *
     * @returns {Number} value
     */
    get transactionPollingTimeout() {
        return super.transactionPollingTimeout;
    }

    /**
     * Sets the defaultAccount property on the eth module and also on the shh module
     *
     * @property defaultAccount
     *
     * @param {String} value
     */
    set defaultAccount(value) {
        super.defaultAccount = value;
        this.eth.defaultAccount = value;
        this.shh.defaultAccount = value;
    }

    /**
     * Gets the defaultAccount property
     *
     * @property defaultAccount
     *
     * @returns {String} value
     */
    get defaultAccount() {
        return super.defaultAccount;
    }

    /**
     * Sets the defaultBlock property on the eth module and also on the shh module
     *
     * @property defaultBlock
     *
     * @param {Number|String} value
     */
    set defaultBlock(value) {
        super.defaultBlock = value;
        this.eth.defaultBlock = value;
        this.shh.defaultBlock = value;
    }

    /**
     * Gets the defaultBlock property
     *
     * @property defaultBlock
     *
     * @returns {String|Number} value
     */
    get defaultBlock() {
        return super.defaultBlock;
    }

    /**
     * Sets the provider for all packages
     *
     * @method setProvider
     *
     * @param {Object|String} provider
     * @param {Net} net
     *
     * @returns {Boolean}
     */
    setProvider(provider, net) {
        return (
            super.setProvider(provider, net) &&
            this.eth.setProvider(provider, net) &&
            this.shh.setProvider(provider, net)
        );
    }

    /**
     * Returns the detected provider
     *
     * @returns {Object}
     */
    static get givenProvider() {
        return ProviderDetector.detect();
    }

    /**
     * Gets the getVoteHash property
     *
     * @property getVoteHash
     *
     * @returns {String|String|String|String} value
     */
    getVoteHash(from, pubKey, amount, salt) {
        if (pubKey.substr(0, 2) === '0x') pubKey = pubKey.substr(2);

        if ((typeof amount) == 'string' && amount.substr(0, 2) === '0x'){
            amount = amount.substr(2);
        } else {
            amount = amount.toString('16');
        }

        amount = (amount.length%2 == 0) ? amount:('0'+amount);

        var saltCode = '';

        for(var i=0;i<salt.length;i++){
            saltCode += salt[i].charCodeAt().toString('16');
        }

        var concatString = from + pubKey + amount + saltCode;

        return '16' + sha3(concatString.toLowerCase(), {encoding: 'hex'});
    }

    sha3(value, options) {
        if (options && options.encoding === 'hex') {
            if (value.length > 2 && value.substr(0, 2) === '0x') {
                value = value.substr(2);
            }
            value = CryptoJS.enc.Hex.parse(value);
        }

        return sha3(value, {
            outputLength: 256
        }).toString();
    }

    /**
     * Returns an object with all public web3 modules
     *
     * @returns {Object}
     */
    static get modules() {
        const providerResolver = new ProvidersModuleFactory().createProviderResolver();

        return {
            Eth: (provider, options, net) => {
                return new Eth(providerResolver.resolve(provider, net), options);
            },
            Net: (provider, options, net) => {
                return new Network(providerResolver.resolve(provider, net), options);
            },
            Personal: (provider, options, net) => {
                return new Personal(providerResolver.resolve(provider, net), options);
            },
            Shh: (provider, options, net) => {
                return new Shh(providerResolver.resolve(provider, net), options);
            },
            Tdm: (provider, options, net) => {
                return new Tdm(providerResolver.resolve(provider, net), options);
            },
            Chain: (provider, options, net) => {
                return new Chain(providerResolver.resolve(provider, net), options);
            },
            Del: (provider, options, net) => {
                return new Del(providerResolver.resolve(provider, net), options);
            },
            Pi: (provider, options, net) => {
                return new Pi(providerResolver.resolve(provider, net), options);
            }
        };
    }
}
