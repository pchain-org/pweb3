# Pchain JavaScript API

This is the Pchain compatible [JavaScript API](https://github.com/pchain-org/pweb3/wiki/JavaScript-API)
which implements the [Generic JSON RPC](https://github.com/pchain-org/pchain/wiki/JSON-RPC#chain_createchildchain) spec. It's available on npm as a node module, for Bower and component as embeddable scripts.


You need to run a local Pchain node to use this library.

[Documentation](https://github.com/pchain-org/pweb3/wiki/JavaScript-API)

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
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:6969/pchain"));
  //'pchain' is the chain id of Main Chain,if you want to connect to child chain,you need to replace 'pchain' to child chain id.The first child chain id is 'child_0'
}
```

Set a provider (`HttpProvider` using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)):

```js
web3.setProvider(new web3.providers.HttpProvider('http://' + BasicAuthUsername + ':' + BasicAuthPassword + '@localhost:6969/pchain'));
```

There you go, now you can use it:

```js
var coinbase = web3.pi.coinbase;
var balance = web3.pi.getBalance(coinbase);
```

You can find more examples in the [`example`](https://github.com/pchain-org/pweb3/tree/master/example) directory.

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
