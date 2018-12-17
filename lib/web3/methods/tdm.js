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
 * @file tdm.js
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

function Tdm(web3) {
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
    var voteNextEpoch = new Method({
        name: 'voteNextEpoch',
        call: 'tdm_voteNextEpoch',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, null]
    });

    var revealVote = new Method({
        name: 'revealVote',
        call: 'tdm_revealVote',
        params: 4,
        inputFormatter: [formatters.inputAddressFormatter, null,null,null]
    });

    var getCurrentEpochNumber = new Method({
        name: 'getCurrentEpochNumber',
        call: 'tdm_getCurrentEpochNumber',
        params: 0
    });

    var getEpoch = new Method({
        name: 'getEpoch',
        call: 'tdm_getEpoch',
        params: 1,
        inputFormatter: [null]
    });

    var getEpochVote = new Method({
        name: 'getEpochVote',
        call: 'tdm_getEpochVote',
        params: 0
    });

    return [
        voteNextEpoch,
        revealVote,
        getCurrentEpochNumber,
        getEpoch,
        getEpochVote
    ];
};


module.exports = Tdm;
