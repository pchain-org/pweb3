.. _pi-ens:

.. include:: include_announcement.rst

============
web3.pi.ens
============

The ``web3.pi.ens`` functions let you interacting with the Ens smart contracts.

.. code-block:: javascript

    import Web3 from 'pweb3';
    import {Ens} from 'web3-pi-ens';
    import {Accounts} from 'web3-pi-accounts';

    // "Web3.givenProvider" will be set if in an Pchain supported browser.
    const pi = new Ens(
        Web3.givenProvider || 'ws://some.local-or-remote.node:6970/pchain',
        null,
        options
        new Accounts(Web3.givenProvider || 'ws://some.local-or-remote.node:6970/pchain', null, options)
    );


    // or using the web3 umbrella package

    const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:6970/pchain', null, options);

    // -> web3.pi.ens

------------------------------------------------------------------------------

registry
=====================

.. code-block:: javascript

    web3.pi.ens.registry;

Returns the network specific Ens registry.

-------
Returns
-------

``Registry`` - The current Ens registry.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.registry;
    > {
        ens: Ens,
        resolverContract: Contract | null,
        setProvider(provider: provider, net?: net.Socket): boolean,
        owner(name: string, callback?: (error: Error, address: string) => void): Promise<string>,
        resolver(name: string): Promise<Contract>,
        checkNetwork(): Promise<string>,
    }

------------------------------------------------------------------------------

resolver
=====================

.. code-block:: javascript

    web3.pi.ens.resolver(name);

Returns the resolver contract to an Pchain address.

-------
Returns
-------

``Resolver`` - The Ens resolver for this name.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.resolver('pchain.pi').then((contract) => {
        console.log(contract);
    });
    > Contract<Resolver>

------------------------------------------------------------------------------

supportsInterface
=====================

.. code-block:: javascript

    web3.pi.ens.supportsInterface(ENSName, interfaceId, [callback]);

Checks if the current resolver does support the desired interface.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name to resolve.
2. ``interfaceId`` - ``String``: A defined ENS interfaceId.
3. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<boolean>`` - Returns true if the given interfaceId is supported by the resolver.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.supportsInterface('pchain.pi', '0xbc1c58d1').then((supportsInterface) => {
        console.log(supportsInterface);
    })
    > true

------------------------------------------------------------------------------

getAddress
=====================

.. code-block:: javascript

    web3.pi.ens.getAddress(ENSName, [callback]);

Resolves an Ens name to an Pchain address.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name to resolve.
2. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<string>`` - The Pchain address of the given name.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getAddress('pchain.pi').then((address) => {
        console.log(address);
    })
    > 0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359

------------------------------------------------------------------------------

setAddress
=====================

.. code-block:: javascript

    web3.pi.ens.setAddress(ENSName, address, options, [callback]);

Sets the address of an Ens name in his resolver.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``address`` - ``String``: The address to set.
3. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
4. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

Emits an ``AddrChanged`` event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setAddress(
        'pchain.pi',
        '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
             console.log(result.events);
    });
    > AddrChanged(...)

    // Or using the event emitter

    web3.pi.ens.setAddress(
        'pchain.pi',
        '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);

    // Or listen to the AddrChanged event on the resolver

    web3.pi.ens.resolver('pchain.pi').then((resolver) => {
        resolver.events.AddrChanged({fromBlock: 0}, (error, event) => {
            console.log(event);
        })
        .on('data', (event) => {
            console.log(event);
        })
        .on('changed', (event) => {
            // remove event from local database
        })
        .on('error', console.error);
    });


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

getPubkey
=====================

.. code-block:: javascript

    web3.pi.ens.getPubkey(ENSName, [callback]);

Returns the X and Y coordinates of the curve point for the public key.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Object<String, String>`` - The X and Y coordinates.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getPubkey('pchain.pi').then((result) => {
        console.log(result)
    });
    > {
        "0": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "1": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "x": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "y": "0x0000000000000000000000000000000000000000000000000000000000000000"
    }

------------------------------------------------------------------------------

setPubkey
=====================

.. code-block:: javascript

    web3.pi.ens.setPubkey(ENSName, x, y, options, [callback]);

Sets the SECP256k1 public key associated with an Ens node

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``x`` - ``String``: The X coordinate of the public key.
3. ``y`` - ``String``: The Y coordinate of the public key.
4. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
5. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.


Emits an ``PubkeyChanged`` event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setPubkey(
        'pchain.pi',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
        console.log(result.events);
    });
    > PubkeyChanged(...)

    // Or using the event emitter

    web3.pi.ens.setPubkey(
        'pchain.pi',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);

    // Or listen to the PubkeyChanged event on the resolver

    web3.pi.ens.resolver('pchain.pi').then((resolver) => {
        resolver.events.PubkeyChanged({fromBlock: 0}, function(error, event) {
            console.log(event);
        })
        .on('data', (event) => {
            console.log(event);
        })
        .on('changed', (event) => {
            // remove event from local database
        })
        .on('error', console.error);
    });


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

getText
=====================

.. code-block:: javascript

    web3.pi.ens.getText(ENSName, key, [callback]);

Returns the text by the given key.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``key`` - ``String``: The key of the array.
3. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<string>``

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getText('pchain.pi', 'key').then((result) => {
        console.log(result);
    });
    > "0000000000000000000000000000000000000000000000000000000000000000"

------------------------------------------------------------------------------

setText
=====================

.. code-block:: javascript

    web3.pi.ens.setText(ENSName, key, value, options, [callback]);

Sets the content hash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``key`` - ``String``: The key.
2. ``value`` - ``String``: The value.
3. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
4. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.


Emits an ``TextChanged`` event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setText(
        'pchain.pi',
        'key',
        'value',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
             console.log(result.events);
     });
    > ContentChanged(...)

    // Or using the event emitter

    web3.pi.ens.setText(
        'pchain.pi',
        'key',
        'value',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);

    // And listen to the TextChanged event on the resolver

    web3.pi.ens.resolver('pchain.pi').then((resolver) => {
        resolver.events.TextChanged({fromBlock: 0}, (error, event) => {
            console.log(event);
        })
        .on('data', (event) => {
            console.log(event);
        })
        .on('changed', (event) => {
            // remove event from local database
        })
        .on('error', console.error);
    });


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

getContent
=====================

.. code-block:: javascript

    web3.pi.ens.getContent(ENSName, [callback]);

Returns the content hash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<string>`` - The content hash associated with an Ens node.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getContent('pchain.pi').then((result) => {
        console.log(result);
    });
    > "0x0000000000000000000000000000000000000000000000000000000000000000"

------------------------------------------------------------------------------

setContent
=====================

.. code-block:: javascript

    web3.pi.ens.setContent(ENSName, hash, options, [callback]);

Sets the content hash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``hash`` - ``String``: The content hash to set.
3. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
4. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.


Emits an ``ContentChanged`` event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setContent(
        'pchain.pi',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
             console.log(result.events);
     });
    > ContentChanged(...)

    // Or using the event emitter

    web3.pi.ens.setContent(
        'pchain.pi',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);

    // Or listen to the ContentChanged event on the resolver

    web3.pi.ens.resolver('pchain.pi').then((resolver) => {
        resolver.events.ContentChanged({fromBlock: 0}, (error, event) => {
            console.log(event);
        })
        .on('data', (event) => {
            console.log(event);
        })
        .on('changed', (event) => {
            // remove event from local database
        })
        .on('error', console.error);
    });


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

getMultihash
=====================

.. code-block:: javascript

    web3.pi.ens.getMultihash(ENSName, [callback]);

Returns the multihash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<string>`` - The associated multihash.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getMultihash('pchain.pi').then((result) => {
        console.log(result);
    });
    > 'QmXpSwxdmgWaYrgMUzuDWCnjsZo5RxphE3oW7VhTMSCoKK'

------------------------------------------------------------------------------

setMultihash
=====================

.. code-block:: javascript

    web3.pi.ens.setMultihash(ENSName, hash, options, [callback]);

Sets the multihash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``hash`` - ``String``: The multihash to set.
3. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
4. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.


Emits an ``MultihashChanged``event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setMultihash(
        'pchain',
        'QmXpSwxdmgWaYrgMUzuDWCnjsZo5RxphE3oW7VhTMSCoKK',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
        console.log(result.events);
    });
    > MultihashChanged(...)

    // Or using the event emitter

    web3.pi.ens.setMultihash(
        'pchain.pi',
        'QmXpSwxdmgWaYrgMUzuDWCnjsZo5RxphE3oW7VhTMSCoKK',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

getContenthash
=====================

.. code-block:: javascript

    web3.pi.ens.getContenthash(ENSName, [callback]);

Returns the contenthash associated with an Ens node. `contenthash` encoding is defined in [EIP1577](http://eips.ethereum.org/EIPS/eip-1577)

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.

-------
Returns
-------

``Promise<string>`` - The associated contenthash.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.getContenthash('pac-txt.pi').then((result) => {
        console.log(result);
    });
    > '0xe30101701220e08ea2458249e8f26aee72b95b39c33849a992a3eff40bd06d26c12197adef16'

------------------------------------------------------------------------------

setContenthash
=====================

.. code-block:: javascript

    web3.pi.ens.setContenthash(ENSName, hash, options, [callback]);

Sets the contenthash associated with an Ens node.

----------
Parameters
----------

1. ``ENSName`` - ``String``: The Ens name.
2. ``hash`` - ``String``: The contenthash to set.
3. ``options`` - ``Object``: The options used for sending.
    * ``from`` - ``String``: The address the transaction should be sent from.
    * ``gasPrice`` - ``String`` (optional): The gas price in wei to use for this transaction.
    * ``gas`` - ``Number`` (optional): The maximum gas provided for this transaction (gas limit).
4. ``Function`` - (optional) Optional callback, returns an error object as first parameter and the result as second.


Emits an ``ContenthashChanged`` event.

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.setContenthash(
        'pchain',
        '0xe301017012208cd82588c4e08268fa0b824caa93847ac843410076eeedc41d65fb52eccbb9e6',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    ).then((result) => {
        console.log(result.events);
    });
    > ContenthashChanged(...)

    // Or using the event emitter

    web3.pi.ens.setContenthash(
        'pchain.pi',
        '0xe301017012208cd82588c4e08268fa0b824caa93847ac843410076eeedc41d65fb52eccbb9e6',
        {
            from: '0x9CC9a2c777605Af16872E0997b3Aeb91d96D5D8c'
        }
    )
    .on('transactionHash', (hash) => {
        ...
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        ...
    })
    .on('receipt', (receipt) => {
        ...
    })
    .on('error', console.error);


For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

Ens events
=====================

The Ens API provides the possibility for listening to all Ens related events.

------------
Known resolver events
------------

1. ``AddrChanged`` - AddrChanged(node bytes32, a address)
2. ``ContentChanged`` - ContentChanged(node bytes32, hash bytes32)
3. ``NameChanged`` - NameChanged(node bytes32, name string)
4. ``ABIChanged`` - ABIChanged(node bytes32, contentType uint256)
5. ``PubkeyChanged`` - PubkeyChanged(node bytes32, x bytes32, y bytes32)
6. ``TextChanged`` - TextChanged(bytes32 indexed node, string indexedKey, string key)
7. ``ContenthashChanged`` - ContenthashChanged(bytes32 indexed node, bytes hash)

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.resolver('pchain.pi').then((resolver) => {
        resolver.events.AddrChanged({fromBlock: 0}, (error, event) => {
            console.log(event);
        })
        .on('data', (event) => {
            console.log(event);
        })
        .on('changed', (event) => {
            // remove event from local database
        })
        .on('error', console.error);
    });
    > {
        returnValues: {
            node: '0x123456789...',
            a: '0x123456789...',
        },
        raw: {
            data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
            topics: [
                '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
                '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385'
            ]
        },
        event: 'AddrChanged',
        signature: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
        logIndex: 0,
        transactionIndex: 0,
        transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
        blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
        blockNumber: 1234,
        address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
    }

------------
Known registry events
------------

1. ``Transfer`` - Transfer(node bytes32, owner address)
2. ``NewOwner`` - NewOwner(node bytes32, label bytes32, owner address)
4. ``NewResolver`` - NewResolver(node bytes32, resolver address)
5. ``NewTTL`` - NewTTL(node bytes32, ttl uint64)

-------
Example
-------

.. code-block:: javascript

    web3.pi.ens.resistry.then((registry) => {
        registry.events.Transfer({fromBlock: 0}, (error, event) => {
              console.log(event);
          })
          .on('data', (event) => {
              console.log(event);
          })
          .on('changed', (event) => {
              // remove event from local database
          })
          .on('error', console.error);
    });
    > {
        returnValues: {
            node: '0x123456789...',
            owner: '0x123456789...',
        },
        raw: {
            data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
            topics: [
                '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
                '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385'
            ]
        },
        event: 'Transfer',
        signature: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
        logIndex: 0,
        transactionIndex: 0,
        transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
        blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
        blockNumber: 1234,
        address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
    }

For further information on the handling of contract events please see here contract-events_.

------------------------------------------------------------------------------

