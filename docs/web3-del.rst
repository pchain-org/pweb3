.. _pi-del:

.. include:: include_announcement.rst

=============
web3.del
=============


The ``web3-del`` package allows you to interact with the Pchain nodes delegate properties.


.. _del-delegate:

delegate
==========

.. code-block:: javascript

    del.delegate([callback])

Create a new transaction to Delegate your balance to Candidate.
The RPC method used is ``del_delegate``.

----------
Parameters
----------


1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``candidate`` -``address, 20 Bytes`` - the address of candidate
3. ``amount`` - ``hex string`` - Amount of the Delegate PAI (minimum 1,000 PAI)
4. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``hash`` - ``string`` - the transaction hash

-------
Example
-------

.. code-block:: javascript

  // Request
  curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"del_delegate","params":["0x1529FA43D9F7FE958662F7200739CDC3EC2666C7","0xd833b6738285f4a50cf42cf1a40c4000256589d4", "0x3635c9adc5dea00000"],"id":1}'

  // Result
  {
    "id":1,
    "jsonrpc": "2.0",
    "result": "0xadef13..."
  }

------------------------------------------------------------------------------


cancelDelegate
=============

.. code-block:: javascript

    del.cancelDelegate([, callback])

Create a new transaction to Cancel your Delegation from Candidate.
The RPC method used is ``del_cancelDelegate``.

----------
Parameters
----------

1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``candidate``- ``address, 20 Bytes`` - the address of candidate
3. ``amount``- ``hex string`` - Amount of the Delegate PAI
4. ``gasPrice: hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``hash`` - ``string`` - the transaction hash

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"del_cancelDelegate","params":["0x1529FA43D9F7FE958662F7200739CDC3EC2666C7","0xd833b6738285f4a50cf42cf1a40c4000256589d4", "0x10000"],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0xadef13..."
    }


------------------------------------------------------------------------------


applyCandidate
=========

.. code-block:: javascript

    del.applyCandidate([, callback])

Create a new transaction to become a Candidate (with specific security deposit and commission fee rate).
The RPC method used is ``del_applyCandidate``.

----------
Parameters
----------


1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``securityDeposit``-``hex string`` - Amount of the security deposit PAI (minimum 10,000 PAI)
3. ``commission``- ``integer`` - the commission fee percentage of each Block Reward be charged from delegator, when Candidate become a Validator (between 0 - 100)
4. ``gasPrice``-``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------


``hash`` - ``string`` - the transaction hash

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"del_applyCandidate","params":["0xd833b6738285f4a50cf42cf1a40c4000256589d4", "0x10000", 10],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0xadef13..."
    }

------------------------------------------------------------------------------

cancelCandidate
=========

.. code-block:: javascript

    del.cancelCandidate([, callback])

Create a new transaction to cancel the Candidate qualification, if the address has deposited proxied balance, it will be refund at the end of epoch, otherwise will be refund immediately.
The RPC method used is ``del_cancelCandidate``.

----------
Parameters
----------

1. ``from``- ``address, 20 Bytes`` - the address who triggers the action
2. ``gasPrice``- ``hex string`` - (optional, default: 1 gwei) gas price from the request


-------
Returns
-------

``hash``- ``hex string`` - the transaction hash

-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"del_cancelCandidate","params":["0xd833b6738285f4a50cf42cf1a40c4000256589d4"],"id":1}'

    // Result
    {
      "id":1,
      "jsonrpc": "2.0",
      "result": "0xadef13..."
    }

------------------------------------------------------------------------------

checkCandidate
=========

.. code-block:: javascript

    del.checkCandidate([, callback])

Returns the candidate status of the account of given address.
The RPC method used is ``del_gcheckCandidate``.

----------
Parameters
----------


1. ``from``- ``address, 20 Bytes`` - address to check for balance.
2. ``blockNumber``- ``QUANTITY|TAG`` - integer block number, or the string "latest", "earliest" or "pending"



-------
Returns
-------



1. ``candidate``- ``Boolean`` - Candidate Flag of the given address
2. ``commission``- ``QUANTITY`` - commission percentage of Candidate Address


-------
Example
-------


.. code-block:: javascript

    // Request
    curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"del_checkCandidate","params":["0xd833b6738285f4a50cf42cf1a40c4000256589d4", "latest"],"id":1}'

    // Result
    {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
            "candidate": false,
            "commission": 0
        }
    }

------------------------------------------------------------------------------

