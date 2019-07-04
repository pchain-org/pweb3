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

    tdm.voteNextEpoch([callback])

Send hash of Vote for the next epoch (The valid window for this vote is between 75% - 85% of current epoch time, to know the detail block height, use tdm_getEpoch).
The RPC method used is ``tdm_voteNextEpoch``.

----------
Parameters
----------


1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``voteHash``- ``hex string, 32 Bytes`` - hash of the vote. (How to get the vote hash, use Keccak-256 (not the standardized SHA3-256) example: keccak256(from + pubkey + amount + salt) ),you can get pubkey from 'priv_validator.json' in the datadir directory(Default ~/.pchain on linux).You can get vote hash By Javascript API web3getvotehash
3. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``hash`` - ``string`` - the transaction hash

-------
Example
-------

.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_voteNextEpoch","params":["0xB3544059698177F14968D29A25AFD0D6D65F4534", "0x1234564bb53ef7907bef3219eb3f2684b66df8a22048a80270960f9671ed0007"],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0xa4r5b7..."
    }

------------------------------------------------------------------------------


revealVote
=============

.. code-block:: javascript

    tdm.revealVote([, callback])

Reveal the vote, the content of vote should matched with the hash which provided in tdm_voteNextEpoch (The valid window for this vote is between 85% - 95% of current epoch time, to know the detail block height, use tdm_getEpoch).
The RPC method used is ``tdm_inspect``.

----------
Parameters
----------


1. ``from``- ``address``, 20 Bytes - the address who triggers the action
2. ``pubkey``-``hex string``, 128 Bytes - the BLS Public Key who triggers the action
3. ``mount``- ``hex string`` - the amount of vote
4. ``salt``- ``string`` - salt string
5. ``signature``- ``hex string, 64 Bytes`` - the signature of From Address, signed by BLS Private Key. (How to sign, see chain_signAddress)
6. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``hash`` - ``string`` - the transaction hash

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_revealVote","params":["0xB3544059698177F14968D29A25AFD0D6D65F4534", "04A77BB50F7D3993CC6485CAABF8FE1980EDAAE88635A1FCB6EFE577D4C10166F0BA4D9C1AC53461FE3332292DDC8594C92E0E4D2C0CEEE0F74D8D67ACD8E391B1", "0x152D02C7E14AF6800000", "tlas", "0x6e5ea219800849592e67f76d45742a29c42a20b0b9d853facf32ac788591869e3db50a10770d88b93f24d2f6efed8acd220bce6442db7a2fbadfdada2d2cde73"],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0xbbr5b7..."
    }


------------------------------------------------------------------------------


getCurrentEpochNumber
=========

.. code-block:: javascript

    tdm.getCurrentEpochNumber([, callback])

Returns the current epoch number.
The RPC method used is ``tdm_getCurrentEpochNumber``.

----------
Parameters
----------

none


-------
Returns
-------


``epochNumber``- ``hex string`` - current epoch number

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_getCurrentEpochNumber","params":[],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0x0" // Epoch 0
    }

------------------------------------------------------------------------------

getEpoch
=========

.. code-block:: javascript

    tdm.getEpoch([, callback])

Returns the epoch details.
The RPC method used is ``tdm_getEpoch``.

----------
Parameters
----------

``number``- ``hex string`` - epoch number


-------
Returns
-------


``result``- ``string`` - detail of the specific epoch, such as validators, start block, end block, reward per block

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_getEpoch","params":["0x0"],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": {
          "number": "0x0",
          "reward_per_block": "0x454f4a543d46b786",
          "start_block": "0x0",
          "end_block": "0xa0668",
          ...
       }
    }

------------------------------------------------------------------------------

getNextEpochVote
=========

.. code-block:: javascript

    tdm.getNextEpochVote([, callback])

Returns the current epoch number.
The RPC method used is ``tdm_getNextEpochVote``.

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

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_getNextEpochVote","params":[],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": {
        "vote_for_epoch": "0x1",
        "start_block": "0x601",
        "end_block": "0x1182",
        "votes": [
          {
            "address": "0xf4050fe211a5d819fb191a429474f30a00615cf9",
            "public_key": "00B64CC58F49BC1BCE9EE5794F85E6858B88B2AEB9E3B6CB4C4EDC5AFB3597D901187D70975C9A26C52908C9DC4D1334935D33FC18D89A3E858598A4D6C128E165AE684629B5D3595E00CC6D402340DCB60664A9BEFA24FE44CEDAF9A505550D7430CC66C0FE4B6931518DAEA6F639B2BC6A7537D8B68F78A45EF0E9C19ACE82",
            "amount": "0x200",
            "salt": "ABCD",
            "vote_hash": "0x9d861ed720a51396a7ba2b5c05db04924d96ed9e81781641bfbd343d4df3dd0e",
            "tx_hash": "0x919a3b45bbda8f0622515405b2a6ffab2653fef3567c405338f19ab229d65fcc"
          }
        ]
      }
    }

------------------------------------------------------------------------------

getNextEpochValidators
=========

.. code-block:: javascript

    tdm.getNextEpochValidators([, callback])

Returns the current epoch number.
The RPC method used is ``tdm_getNextEpochValidators``.

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

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_getNextEpochValidators","params":[],"id":1}'

    // Result
    {
        "jsonrpc": "2.0",
        "id": 1,
        "result": [
            {
                "address": "0xf4050fe211a5d819fb191a429474f30a00615cf9",
                "public_key": "00B64CC58F49BC1BCE9EE5794F85E6858B88B2AEB9E3B6CB4C4EDC5AFB3597D901187D70975C9A26C52908C9DC4D1334935D33FC18D89A3E858598A4D6C128E165AE684629B5D3595E00CC6D402340DCB60664A9BEFA24FE44CEDAF9A505550D7430CC66C0FE4B6931518DAEA6F639B2BC6A7537D8B68F78A45EF0E9C19ACE82",
                "voting_power": "0x200"
            }
        ]
    }

------------------------------------------------------------------------------

generatePrivateValidator
=========

.. code-block:: javascript

    tdm.generatePrivateValidator([, callback])

Returns the generated BLS Public/Private Key associate with provided address.
The RPC method used is ``tdm_generatePrivateValidator``.

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

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"tdm_generatePrivateValidator","params":["0x1234567890123456789012345678901234567890"],"id":1}'

    // Result
    {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
            "address": "0x1234567890123456789012345678901234567890",
            "consensus_pub_key": "6FDF14270D8346A5D60F2A8503D39529851909F18A35AAB0201E30A31B47A64A6D72F9D3E7D6E880408643EACBEBD16D77AB062EF6BCFBC6F2294A365AE119DD6942111D63D8FD5870D69DC651B8B6C8D7C11FDE51AE5F77846A102C25568619838548F301087A12EA0A0E4FEB6074695B0CA815777FF897F522E5307036A3DE",
            "consensus_priv_key": "B56578D7960C8AB00C1BE6D8D95D9A2424F604549F2F1D965EFACEBAE527A7A1"
        }
    }

------------------------------------------------------------------------------
