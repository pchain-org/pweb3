# web3-eth-txpool

This is a sub package of [web3.js][repo]

This is the TxPool module. This is an independent module. If you want to use this module, you need to import it in your project.
Please read the [documentation][docs] for more.

## Installation

```bash
npm install web3-eth-txpool
```

## Usage

```js
import {TxPool} from 'web3-eth-txpool';

const txPool = new TxPool(
    'http://127.0.0.1:6970/pchain',
    null,
    options
);
```

## Types

All the typescript typings are placed in the types folder.

[docs]: https://pweb3js.readthedocs.io/en/latest/
[repo]: https://github.com/pchain-org/pweb3
