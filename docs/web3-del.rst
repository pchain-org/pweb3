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

    web3.del.delegate(from,candidate,amount,gasPrice [, callback])

Create a new transaction to Delegate your balance to Candidate.

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

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var candidate = "0xB3544059698177F14968D29A25AFD0D6D65F4537";
    var amount = "0x21e19e0c9bab2400000";
    var gasPrice = null:
    web3.del.delegate(from,candidate,amount,gasPrice,function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------


cancelDelegate
=============

.. code-block:: javascript

    web3.del.cancelDelegate(from,candidate,amount,gasPrice [, callback])

Create a new transaction to Cancel your Delegation from Candidate.

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

  var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
  var candidate = "0xB3544059698177F14968D29A25AFD0D6D65F4537";
  var amount = "0x152D02C7E14AF6800000";
  var gasPrice = null:
  web3.del.cancelDelegate(from,candidate,amount,gasPrice,function(err, result) {
   if (!err)
     console.log(result); 
  });


------------------------------------------------------------------------------


applyCandidate
=========

.. code-block:: javascript

     web3.del.applyCandidate(from,securityDeposit,commission,gasPrice [, callback])

Create a new transaction to become a Candidate (with specific security deposit and commission fee rate).

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

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var securityDeposit = "0x21e19e0c9bab2400000";
    var commission = 10;
    var gasPrice = null:
    web3.del.applyCandidate(from,securityDeposit,commission,gasPrice,function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

cancelCandidate
=========

.. code-block:: javascript

     web3.del.cancelCandidate(from,gasPrice [, callback])

Create a new transaction to become a Candidate (with specific security deposit and commission fee rate).

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

    var from = "0xB3544059698177F14968D29A25AFD0D6D65F4534";
    var gasPrice = null:
    web3.del.cancelCandidate(from,gasPrice,function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

checkCandidate
=========

.. code-block:: javascript

    web3.del.checkCandidate(from,blockNumber [, callback])

Returns the candidate status of the account of given address.

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

    var from = "0xd833b6738285f4a50cf42cf1a40c4000256589d4";
    web3.del.checkCandidate(from,"latest",function(err, result) {
     if (!err)
       console.log(result); 
    });

------------------------------------------------------------------------------

