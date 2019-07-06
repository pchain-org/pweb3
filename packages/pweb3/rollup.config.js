import pkg from './package.json';
import rollupConfig from '../../rollup.config';

export default rollupConfig('Web3', pkg.name, {
    'pweb3-core': 'pweb3-core',
    'pweb3-providers': 'pweb3-providers',
    'pweb3-utils': 'pweb3-utils',
    'pweb3-eth': 'pweb3-eth',
    'pweb3-eth-personal': 'pweb3-eth-personal',
    'pweb3-shh': 'pweb3-shh',
    'pweb3-tdm': 'pweb3-tdm',
    'pweb3-chain': 'pweb3-chain',
    'pweb3-del': 'pweb3-del',
    'pweb3-pi': 'pweb3-pi',
    'pweb3-net': 'pweb3-net'
});
