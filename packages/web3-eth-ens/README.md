# web3-eth-ens

This is a sub module of [web3.js][repo]

This is the Ens module and it will be used in the `web3-eth` module.
Please read the [documentation][docs] for more.

## Installation

```bash
npm install web3-eth-ens
```

## Usage

```js
import {Ens} from 'web3-eth-ens';

new Ens(
    'ws://localhost:6970/pchain',
    null,
    options,
    accountsModule
);
```

## Types 

All the typescript typings are placed in the types folder. 

[docs]: https://pweb3js.readthedocs.io/en/latest/
[repo]: https://github.com/pchain-org/pweb3
