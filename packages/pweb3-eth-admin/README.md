# web3-eth-admin

This is a sub module of [web3.js][repo]

This is the admin module. This is an independent module. If you want to use this module, you need to import this in your project.
Please read the [documentation][docs] for more.

## Installation

```bash
npm install web3-eth-admin
```

## Usage

```js
import {Admin} from 'web3-eth-admin';

const admin = new Admin(
    'http://127.0.0.1:6970/pchain',
    null,
    options
);
```

## Types

All the typescript typings are placed in the types folder.

[docs]: https://pweb3js.readthedocs.io/en/latest/
[repo]: https://github.com/pchain-org/pweb3
