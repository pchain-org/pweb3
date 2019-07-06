# web3-eth-accounts

This is a sub module of [web3.js][repo]

This is the accounts module to be used in the `web3-eth` module.
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-eth-accounts
```

## Usage

```js
import {Accounts} from 'web3-eth-accounts';

const accounts = new Accounts(
    'http://127.0.0.1:4546',
    null,
    options
);
```

## Types 

All the typescript typings are placed in the types folder. 

[docs]: https://pweb3js.readthedocs.io/en/latest/
[repo]: https://github.com/pchain-org/pweb3
