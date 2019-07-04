.. _chain:

.. include:: include_announcement.rst

==========
web3.chain
==========


The ``web3-chain`` package allows you to interact with the Pchain nodes network properties.


createChildChain
=====================

.. code-block:: javascript

 web3.chain.createChildChain(from,chainId,minValidators,minDepositAmount,startBlock,endBlock,gasPrice [, callback])


Send an application of Child Chain Creation, save the application into the ChainInfo DB.

----------
Parameters
----------

1. ``from`` - address - the address who triggers the action
2. ``chainId`` - string - child chain id
3. ``minValidators`` - hex string - Minimum Validators of the new Child Chain
4. ``minDepositAmount`` - hex string - Minimum Deposit PAI of the new Child Chain
5. ``startBlock`` - hex string - Start Block height for launch child chain
6. ``endBlock`` - hex string - End Block height for launch child chain
7. ``gasPrice`` - hex string - ( if set to null,system will give default value(1 gwei) ) gas price from the request

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0xa349d8a4e35f0c922377168daae653b5c9f1d370";
    var chainId = "pchain-child-1";
    var minValidators = "0x1";
    var minDepositAmount = "0x152D02C7E14AF6800000";
    var gas = "0x32":
    var gasPrice = "0x7D0";
    web3.chain.createChildChain(from,chainId,minValidators,minDepositAmount,startBlock,endBlock,gas,gasPrice, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------

joinChildChain
=====================

.. code-block:: javascript

 web3.chain.joinChildChain(from,pubkey,chainId,depositAmount,signature,gasPrice [, callback])


Send a request to Join the child chain, save the Join Application into the ChainInfo DB, after the blockchain match the criteria of the child chain, chainMgr will load the Child Chain Data from ChainInfo DB then start it.

----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``pubkey`` - hex string, 128 Bytes - the BLS Public Key who triggers the action
3. ``chainId`` - string - child chain id
4. ``depositAmount`` - hex string - Amount of the Deposit PAI to join the Child Chain
5. ``signature`` - hex string, 64 Bytes - the signature of From Address, signed by BLS Private Key. (How to sign, see web3.chain.signAddress)
6. ``gasPrice`` - hex string - ( if set to null,system will give default value(1 gwei) ) gas price from the request

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0x5CE010Bf008Ba976Dd80Ed968a2f916190Cf9b4f";
    var pubkey = "5CCB45F727A7075C9336DF357A3610DD884FD97E64FFB51EED30890B8B3519E36D1C211A7BC1335C09CE654779328F1D01D997C1B2C5F9D196AD67FA5AF7A00273CED363C50D8F12B4EA096AFB859D6311C63C910752D41C0532C2D2654DCA863F7D56B2B9C33E0E7A5A0349F6B4FC20AE15526C5463F11D76FA92AB183ECEBE";
    var chainId = "pchain-child-1";
    var depositAmount = "0x152D02C7E14AF6800000";
    var signature = "0x6e5ea219800849592e67f76d45742a29c42a20b0b9d853facf32ac788591869e3db50a10770d88b93f24d2f6efed8acd220bce6442db7a2fbadfdada2d2cde73";
    var gasPrice = "0x7D0";
    web3.chain.joinChildChain(from,pubkey,chainId,depositAmount,signature,gasPrice, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


depositInMainChain
=====================

.. code-block:: javascript

 web3.chain.depositInMainChain(from,chainId,amount,gasPrice [, callback])


----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``chainId`` - string - child chain id
3. ``amount`` -  hex string - amount of PAI to deposit
4. ``gasPrice`` - hex string - ( if set to null,system will give default value(1 gwei) ) gas price from the request

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var chainId = "pchain-child-1";
    var amount = "0x152D02C7E14AF6800000";
    var gasPrice = "0x2540be400";
    web3.chain.depositInMainChain(from,chainId,amount,gasPrice, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


depositInChildChain
=====================

.. code-block:: javascript

 web3.chain.depositInChildChain(from,txHash [, callback])

Deposit from the main chain to child chain (step 2). Should be used with chain_depositInMainChain



----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``txHash`` - string - Tx Hash of the chain_depositInMainChain rpc

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var txHash = "0x31d6fe38869272a821ac7a2b3b00aba9cb486f02cc570895f8f5d2dea8f7b5dc";
    web3.chain.depositInChildChain(from,txHash, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


withdrawFromChildChain
=====================

.. code-block:: javascript

 web3.chain.withdrawFromChildChain(from,amount,gasPrice [, callback])


Withdraw from child chain to the main chain (step 1). Should be used with chain_withdrawFromMainChain


----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``txHash`` - string - Tx Hash of the chain_depositInMainChain rpc
3. ``gasPrice`` -  hex string - ( if set to null,system will give default value(1 gwei) ) gas price from the request

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var amount = "0x152D02C7E14AF6800000";
    var gasPrice = "0x2540be400";
    web3.chain.withdrawFromChildChain(from,amount,gasPrice, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


withdrawFromMainChain
=====================

.. code-block:: javascript

 web3.chain.withdrawFromMainChain(from,amount,chainId,txHash [, callback])


Withdraw from child chain to the main chain (step 2). Should be used with chain_withdrawFromChildChain


----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``amount`` -  hex string - amount of PAI to withdraw
3. ``chainId`` -  string - child chain id
3. ``txHash`` -  string - Tx Hash of the chain_withdrawFromChildChain rpc

-------
Returns
-------

String - The 32 Bytes transaction hash as HEX string.


-------
Example
-------

.. code-block:: javascript

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var amount = "0x152D02C7E14AF6800000";
    var chainId = "pchain-child-1":
    var txHash = "0x6ff2ac4bb53ef7907bef3219eb3f2684b66df8a22048a80270960f9671ed0007";
    web3.chain.withdrawFromMainChain(from,amount,chainId,txHash, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


signAddress
=====================

.. code-block:: javascript

 web3.chain.signAddress(from,privateKey [, callback])


Sign the Address with BLS Private Key, return the BLS Signature to proof you are the owner of the BLS Public Key


----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``privateKey`` - hex string, 32 Bytes - BLS Private Key,How To Get Your Privatekey


-------
Returns
-------

DATA, 64 Bytes - the BLS Signature for the Address

-------
Example
-------

.. code-block:: javascript

    var from = "0xFD6AA07FF92907886B10B8E8863DDF8BA1902109";
    var privateKey = "0xA1BCB0033FC989D34026EED71AE6C57004CF1FBDC520ABF112B13FF7C03B62C6";
    web3.chain.signAddress(from,privateKey, function(err, Signature) {
     if (!err)
       console.log(Signature);
    });

------------------------------------------------------------------------------


setBlockReward
=====================

.. code-block:: javascript

 web3.chain.setBlockReward(from,reward [, callback])


Set the Reward of each block for the CHILD CHAIN, only Child Chain Owner is allowed to send this tx. The Block Reward change will effect on the next block after this tx be mined.

The Block Reward will be charged from Child Chain Address 0x0000000000000000000000000000000000000064 balance, which accept anyone to transfer their contribution

----------
Parameters
----------

1. ``from`` - address, 20 Bytes - the address who triggers the action
2. ``reward`` - hex string - The reward of each block

-------
Returns
-------

hash, string - the transaction hash


-------
Example
-------

.. code-block:: javascript

    var from = "0xFD6AA07FF92907886B10B8E8863DDF8BA1902109";
    var award = "0x1";
    web3.chain.setBlockReward(from,award, function(err, hash) {
     if (!err)
       console.log(hash);
    });

------------------------------------------------------------------------------


getBlockReward
=====================

.. code-block:: javascript

 web3.chain.getBlockReward(blockNumber [, callback])

Get the Reward of each block for the CHILD CHAIN


----------
Parameters
----------

1. ``QUANTITY|TAG`` - integer block number, or the string "latest", "earliest" or "pending"

-------
Returns
-------

QUANTITY - integer of the block reward in wei


-------
Example
-------

.. code-block:: javascript

    var blockNumber = "0x670";
    web3.chain.getBlockReward(blockNumber, function(err, result) {
     if (!err)
       console.log(result);
    });

------------------------------------------------------------------------------


getAllChains
=====================

.. code-block:: javascript

 web3.chain.getAllChains( [, callback])

Get all the Chain Info from the node (A synced Full node should have all the chains' info)


----------
Parameters
----------

none


-------
Returns
-------

Object - The chain info object

    chain_id: String - The chain id of the chain.
    owner: Address, 20 Bytes - The owner address of the chain.
    current_epoch: Number - The current epoch number of the chain.
    epoch_start_time: Time - The start time of the current epoch
    validators: Array - Array of validator object
    address: Address - Address of the Validator
    voting_power: QUANTITY - Voting Power (Stack) of the Validator


-------
Example
-------

.. code-block:: javascript

    web3.chain.getAllChains(function(err, result) {
     if (!err)
       console.log(result);
    });

------------------------------------------------------------------------------
