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
 * @file getVoteHash.js
 * @author skykingit <skykingit@aliyun.com>
 * @date 2018
 */


var sha3 = require('./sha3');

module.exports = function (from, pubKey,amount,salt) {

    if(pubKey.substr(0, 2) === '0x') pubKey = pubKey.substr(2);

    if( (typeof amount) == "string" && amount.substr(0, 2) === '0x'){
        amount = amount.substr(2);
    }else{
        amount = amount.toString("16");
    } 

    amount = (amount.length%2 == 0)?amount:("0"+amount);

    salt =  Buffer.from(salt).toString("hex");

    var  concatString = from+pubKey+amount+salt;

    return "0x" + sha3(concatString.toLowerCase(),{encoding: 'hex'});
};

