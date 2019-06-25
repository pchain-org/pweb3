# Pchain JavaScript API

This is the Pchain compatible [JavaScript API](https://github.com/pchain-org/pweb3/wiki/JavaScript-API)
which implements the [Generic JSON RPC](https://github.com/pchain-org/pchain/wiki/JSON-RPC#chain_createchildchain) spec. It's available on npm as a node module, for Bower and component as embeddable scripts.


You need to run a local Pchain node to use this library.

[Documentation](https://github.com/pchain-org/pweb3/wiki/JavaScript-API)


## Installation

### Node

```bash
npm install pweb3
```

### Yarn

```bash
yarn add pweb3
```

### Meteor

```bash
meteor npm install --save pweb3@1.x
```

## Usage

```js
var Web3 = require("pweb3");

const web3 = new Web3('ws://localhost:6970/pchain');
console.log(web3);
> {
    eth: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider)

```js

web3.setProvider('ws://localhost:6970/pchain');

// or

// Set the provider you want from Web3.providers
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:6970/pchain'));
//'pchain' is the chain id of Main Chain,if you want to connect to child chain,you need to replace 'pchain' to child chain id.The first child chain id is 'child_0'
  

```

There you go, now you can use it:

```js
web3.eth.getAccounts()
.then(console.log);
```

### Usage with TypeScript

We support types within the repo itself. Please open an issue here if you find any wrong types.

You can use `pweb3.js` as follows:

```typescript
import Web3 from 'pweb3';
const web3 = new Web3("ws://localhost:6970/pchain");
```

If you are using the types in a `commonjs` module like for example a node app you just have to enable `esModuleInterop` in your `tsconfig` compile option, also enable `allowSyntheticDefaultImports` for typesystem compatibility:

```js
"compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    ....
```

## Documentation

Documentation can be found at [read the docs][docs]

## Contributing

- All contributions have to go into the 1.0 branch
- Please follow the code style of the other files, we use 4 spaces as tabs.

### Requirements

* [Node.js](https://nodejs.org)
* npm

### Commands
```bash
npm install # install all dependencies for npm run bootstrap
npm run bootstrap # install all dependencies and symlinks the internal modules for all modules
npm run build # runs rollup
npm run test # runs all tests 
npm run clean # removes all the node_modules folders in all modules
npm run dev # runs rollup with a watcher

```


## License

[LGPL-3.0+](LICENSE.md) © 2018 Contributors


[repo]: https://github.com/pchain-org/pweb3
[docs]: http://web3js.readthedocs.io/en/1.0/
[npm-image]: https://badge.fury.io/js/web3.png
[npm-url]: https://npmjs.org/package/pweb3
[travis-image]: https://travis-ci.org/ethereum/web3.js.svg
[travis-url]: https://travis-ci.org/ethereum/web3.js
[dep-image]: https://david-dm.org/ethereum/web3.js.svg
[dep-url]: https://david-dm.org/ethereum/web3.js
[dep-dev-image]: https://david-dm.org/ethereum/web3.js/dev-status.svg
[dep-dev-url]: https://david-dm.org/ethereum/web3.js#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/ethereum/web3.js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/ethereum/web3.js?branch=master
[waffle-image]: https://badge.waffle.io/ethereum/web3.js.svg?label=ready&title=Ready
[waffle-url]: https://waffle.io/ethereum/web3.js
