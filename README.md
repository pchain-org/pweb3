# Pchain JavaScript API

This is the Pchain compatible [JavaScript API](https://github.com/PchainJS/PchainWeb3/wiki/JavaScript-API)
which implements the [Generic JSON RPC](https://github.com/pchain-org/pchain/wiki/JSON-RPC#chain_createchildchain) spec. It's available on npm as a node module, for Bower and component as embeddable scripts.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url] [![dev dependency status][dep-dev-image]][dep-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Stories in Ready][waffle-image]][waffle-url]

<!-- [![browser support](https://ci.testling.com/ethereum/ethereum.js.png)](https://ci.testling.com/ethereum/ethereum.js) -->

You need to run a local Pchain node to use this library.

[Documentation](https://github.com/PchainJS/PchainWeb3/wiki/JavaScript-API)

## Table of Contents

- [Installation](#installation)
  - [Node.js](#nodejs)
  - [Yarn](#yarn)
  - [As a Browser module](#as-a-browser-module)
- [Usage](#usage)
  - [Latest Version](#usage)
- [Contribute!](#contribute)
  - [Requirements](#requirements)
  - [Building (gulp)](#building-gulp)
  - [Testing (mocha)](#testing-mocha)
- [License](#license)

## Installation

### Node.js

```bash
npm install pweb3
```

### Yarn

```bash
yarn add pweb3
```

```

### As a Browser module


Bower

```bash
bower install pweb3
```


* Include `pweb3.min.js` in your html file. (not required for the meteor package)

## Usage

Use the `web3` object directly from the global namespace:

```js
var Web3 = require("pweb3");
var web3 = new Web3();
console.log(web3); // {eth: .., shh: ...} // It's here!
```

Set a provider (`HttpProvider`):

```js
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // Set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/pchain"));
}
```

Set a provider (`HttpProvider` using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)):

```js
web3.setProvider(new web3.providers.HttpProvider('http://' + BasicAuthUsername + ':' + BasicAuthPassword + '@localhost:8545'));
```

There you go, now you can use it:

```js
var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase);
```

You can find more examples in the [`example`](https://github.com/ethereum/web3.js/tree/master/example) directory.

```
## Contribute!

### Requirements

* Node.js
* npm

```bash
# On Linux:
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install nodejs-legacy
```

### Building (gulp)

```bash
npm run-script build
```


### Testing (mocha)

```bash
npm test
```


## License

[LGPL-3.0+](LICENSE.md) © 2018 Contributors


[npm-image]: https://badge.fury.io/js/web3.svg
[npm-url]: https://npmjs.org/package/web3
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
