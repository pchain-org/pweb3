/**
 * @file RevealVoteMethod.js
 * @author lzhao
 * @date 2019
 */
import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class RevealVoteMethod extends AbstractMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     * @param {AbstractWeb3Module} moduleInstance
     * @constructor
     */
    constructor(utils, formatters, moduleInstance) {
        super('tdm_revealVote', 5, utils, formatters, moduleInstance);
    }
}
