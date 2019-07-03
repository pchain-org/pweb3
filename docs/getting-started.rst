.. include:: include_announcement.rst

===============
Getting Started
===============

The pweb3.js library is a collection of modules which contain specific functionality for the Pchain ecosystem.

- The ``web3-pi`` is for the Pchain blockchain and smart contracts
- The ``web3-shh`` is for the whisper protocol to communicate p2p and broadcast
- The ``web3-utils`` contains useful helper functions for DApp developers.


.. _adding-web3:

Adding pweb3.js
==============

.. index:: npm

First you need to get pweb3.js into your project. This can be done using the following methods:

- npm: ``npm install pweb3``

After that you need to create a web3 instance and set a provider.
A Pchain compatible browser will have a ``window.Pchain`` or ``web3.currentProvider`` available.
For  pweb3.js, check ``Web3.givenProvider``. If this property is ``null`` you should connect to your own local or remote node.

.. code-block:: javascript

    // in node.js use: const Web3 = require('pweb3');

    // use the given Provider, e.g in the browser with Metamask, or instantiate a new websocket provider
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:6970/pchain', null, {});

    // or
    const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://localhost:6970/pchain'), null, {});

    // Using the IPC provider in node.js
    const net = require('net');

    const web3 = new Web3('/Users/myuser/Library/Pchain/pchain.ipc', net, {}); // mac os path
    // or
    const web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Pchain/pchain.ipc', net, {})); // mac os path
    // on windows the path is: '\\\\.\\pipe\\pchain.ipc'
    // on linux the path is: '/users/myuser/.pchain/pchain.ipc'


That's it! now you can use the ``web3`` object.
