/*
    This file is part of pweb3.

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
 * @file del.js
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

function Del(web3) {
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
    var delegate = new Method({
        name: 'delegate',
        call: 'del_delegate',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputAddressFormatter,null,null]
    });

    var cancelDelegate = new Method({
        name: 'cancelDelegate',
        call: 'del_cancelDelegate',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputAddressFormatter,null,null]
    });

    var applyCandidate = new Method({
        name: 'applyCandidate',
        call: 'del_applyCandidate',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null]
    });

    var cancelCandidate = new Method({
        name: 'cancelCandidate',
        call: 'del_cancelCandidate',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, null]
    });

    
    return [
        delegate,
        cancelDelegate,
        applyCandidate,
        cancelCandidate
    ];
};


module.exports = Del;
