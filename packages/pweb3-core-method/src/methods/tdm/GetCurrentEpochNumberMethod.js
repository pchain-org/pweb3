/**
 * @file GetCurrentEpochNumberMethod.js
 * @author lzhao
 * @date 2019
 */
import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class GetCurrentEpochNumberMethod extends AbstractMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('tdm_getCurrentEpochNumber', 0, utils, formatters, moduleInstance);
    }
}
