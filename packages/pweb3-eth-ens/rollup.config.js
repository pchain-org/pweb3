import pkg from './package.json';
import rollupConfig from '../../rollup.config';

export default rollupConfig('Web3EthEns', pkg.name, {
    'pweb3-eth-contract': 'pweb3-eth-contract',
    'web3-core-promievent': 'web3-core-promievent',
    'eth-ens-namehash': 'eth-ens-namehash'
});
