.. _pi-tdm:

.. include:: include_announcement.rst

=============
web3.tdm
=============


The ``web3-tdm`` package allows you to interact with the Pchain nodes tdm properties.


.. _tdm-voteNextEpoch:

voteNextEpoch
==========

.. code-block:: javascript

    web3.tdm.voteNextEpoch(from,voteHash,gasPrice [, callback])

Send hash of Vote for the next epoch.

----------
Parameters
----------


1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``voteHash``- ``hex string, 32 Bytes`` - hash of the vote. (How to get the vote hash, use Keccak-256 (not the standardized SHA3-256) example: keccak256(from + pubkey + amount + salt) ),you can get pubkey from 'priv_validator.json' in the datadir directory(Default ~/.pchain on linux).You can get vote hash By Javascript API :ref:`getvotehash`
3. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``String`` - The 32 Bytes transaction hash as HEX string.

-------
Example
-------

.. code-block:: javascript

    var from = "4CACBCBF218679DCC9574A90A2061BCA4A8D8B6C";
    var pubkey = "7315DF293B07C52EF6C1FC05018A1CA4FB630F6DBD4F1216804FEDDC2F04CD2932A5AB72B6910145ED97A5FFA0CDCB818F928A8921FDAE8033BF4259AC3400552065951D2440C25A6994367E1DC60EE34B34CB85CD95304B24F9A07473163F1F24C79AC5CBEC240B5EAA80907F6B3EDD44FD8341BF6EB8179334105FEDE6E790";
    var amount = "0x1f4";
    var salt = "ABCD";
    var voteHash  = web3.getVoteHash(from,pubkey,amount,salt);
    // "0x78701448b4ee6fc4edc940266bcebc3e21b1b3c208957cb081cfba5a629beb72"
    var gasPrice = null:

    web3.tdm.voteNextEpoch(from,voteHash,gasPrice, function(err, hash) {
     if (!err)
       console.log(hash); 
    });

------------------------------------------------------------------------------


revealVote
=============

.. code-block:: javascript

    web3.tdm.revealVote(from,pubkey,amount,salt,signature,gasPrice [, callback])

Reveal the vote, the content of vote should matched with the hash which provided in tdm_voteNextEpoch.

----------
Parameters
----------


1. ``from``- ``address``, 20 Bytes - the address who triggers the action
2. ``pubkey``-``hex string``, 128 Bytes - the BLS Public Key who triggers the action
3. ``mount``- ``hex string`` - the amount of vote
4. ``salt``- ``string`` - salt string
5. ``signature``- ``hex string, 64 Bytes`` - the signature of From Address, signed by BLS Private Key. (How to sign, see :ref:`chain_signAddress`)
6. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``String`` - The 32 Bytes transaction hash as HEX string.

-------
Example
-------


.. code-block:: javascript

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var pubkey = "04A77BB50F7D3993CC6485CAABF8FE1980EDAAE88635A1FCB6EFE577D4C10166F0BA4D9C1AC53461FE3332292DDC8594C92E0E4D2C0CEEE0F74D8D67ACD8E391B1";
    var amount = "0x152D02C7E14AF6800000";
    var salt = "salt":
    var signature = "0x6e5ea219800849592e67f76d45742a29c42a20b0b9d853facf32ac788591869e3db50a10770d88b93f24d2f6efed8acd220bce6442db7a2fbadfdada2d2cde73";
    var gasPrice = null:
    web3.tdm.revealVote(from,pubkey,amount,salt,signature, gasPrice,function(err, hash) {
     if (!err)
       console.log(hash); 
    });


------------------------------------------------------------------------------


getCurrentEpochNumber
=========

.. code-block:: javascript

     web3.tdm.getCurrentEpochNumber( [, callback])

Returns the current epoch number.

----------
Parameters
----------

none


-------
Returns
-------


``epochNumber``- ``int`` - current epoch number

-------
Example
-------


.. code-block:: javascript

    web3.tdm.getCurrentEpochNumber(function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

getEpoch
=========

.. code-block:: javascript

    web3.tdm.getEpoch(number [, callback])

Returns the epoch details.

----------
Parameters
----------

``number``- ``int`` - epoch number


-------
Returns
-------


the epoch details

-------
Example
-------


.. code-block:: javascript

    var number = 1;
    web3.tdm.getEpoch(number,function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

getNextEpochVote
=========

.. code-block:: javascript

    web3.tdm.getNextEpochVote([, callback])

Returns the current epoch number.

----------
Parameters
----------

none


-------
Returns
-------


``result``- ``string`` - votes detail of the next epoch, such as epoch number, start block, end block, votes

-------
Example
-------


.. code-block:: javascript

    web3.tdm.getNextEpochVote(function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

getNextEpochValidators
=========

.. code-block:: javascript

    web3.tdm.getNextEpochValidators([, callback])

Returns the validators of the next epoch based on the votes.

----------
Parameters
----------

none


-------
Returns
-------


``result``- ``DATA`` - validators of the next epoch, such as address, public key, voting power

-------
Example
-------


.. code-block:: javascript

    web3.tdm.getNextEpochValidators(function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

generatePrivateValidator
=========

.. code-block:: javascript

    web3.tdm.generatePrivateValidator(from,[, callback])

Returns the generated BLS Public/Private Key associate with provided address.

----------
Parameters
----------

``from``- ``address``- 20 Bytes 


-------
Returns
-------

1. ``address``-`` address, 20 Bytes`` - address from the request
2. ``consensus_pub_key``-``hex string, 128 Bytes`` - the generated BLS Public Key
3. ``consensus_priv_key``-``hex string, 32 Bytes`` - the generated BLS Private Key


-------
Example
-------


.. code-block:: javascript

    var from = "0x1234567890123456789012345678901234567890";
    web3.tdm.generatePrivateValidator(from,function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------
