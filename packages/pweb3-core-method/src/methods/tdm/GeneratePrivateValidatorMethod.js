/**
 * @file GeneratePrivateValidatorMethod.js
 * @author lzhao
 * @date 2019
 */
import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class GeneratePrivateValidatorMethod extends AbstractMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('tdm_generatePrivateValidator', 1, utils, formatters, moduleInstance);
    }
}
