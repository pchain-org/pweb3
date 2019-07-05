/**
 * @file SignAddressMethod.js
 * @author lzhao
 * @date 2019
 */
import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class SignAddressMethod extends AbstractMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('chain_signAddress', 2, utils, formatters, moduleInstance);
    }
}
