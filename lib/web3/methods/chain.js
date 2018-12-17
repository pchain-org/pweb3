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
 * @file chain.js
 * @author Marek Kotewicz <skykingit@aliyun.com>
 * @date 2018
 */

"use strict";

var formatters = require('../formatters');
var utils = require('../../utils/utils');
var Method = require('../method');
var Property = require('../property');
var c = require('../../utils/config');
var Contract = require('../contract');
var watches = require('./watches');
var Filter = require('../filter');
var IsSyncing = require('../syncing');
var namereg = require('../namereg');
var Iban = require('../iban');
var transfer = require('../transfer');

function Chain(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    this.iban = Iban;
    this.sendIBANTransaction = transfer.bind(null, this);
}


var methods = function () {
    var createChildChain = new Method({
        name: 'createChildChain',
        call: 'chain_createChildChain',
        params: 8,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null,null,null,null,null]
    });

    var joinChildChain = new Method({
        name: 'joinChildChain',
        call: 'chain_joinChildChain',
        params: 6,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null,null,null]
    });

    var depositInMainChain = new Method({
        name: 'depositInMainChain',
        call: 'chain_depositInMainChain',
        params: 5,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null,null]
    });

    var depositInChildChain = new Method({
        name: 'depositInChildChain',
        call: 'chain_depositInChildChain',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, null]
    });

    var withdrawFromChildChain = new Method({
        name: 'withdrawFromChildChain',
        call: 'chain_withdrawFromChildChain',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null]
    });

    var withdrawFromMainChain = new Method({
        name: 'withdrawFromMainChain',
        call: 'chain_withdrawFromMainChain',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null]
    });


    return [
        createChildChain,
        joinChildChain,
        depositInMainChain,
        depositInChildChain,
        withdrawFromChildChain,
        withdrawFromMainChain
    ];
};


module.exports = Chain;
