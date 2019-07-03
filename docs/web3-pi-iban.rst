.. _pi-iban:

.. include:: include_announcement.rst

=============
web3.pi.Iban
=============

The ``web3.pi.Iban`` function lets convert Pchain addresses from and to IBAN and BBAN.

.. code-block:: javascript

    import {Iban} from 'web3-pi-iban';

    const iban = new Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');

    // or using the web3 umbrella package

    import Web3 from 'pweb3';
    const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:6970/pchain', null, options);

    // -> new web3.pi.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS')



------------------------------------------------------------------------------

Iban instance
=====================

This's instance of Iban

.. code-block:: javascript

    > Iban { _iban: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS' }

------------------------------------------------------------------------------

.. _pi-iban-toaddress:

toAddress
=====================

    static function

.. code-block:: javascript

    web3.pi.Iban.toAddress(ibanAddress)

Singleton: Converts a direct IBAN address into an Pchain address.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to convert.

-------
Returns
-------

``String`` - The Pchain address.

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.toAddress("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
    > "0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8"


------------------------------------------------------------------------------

.. _pi-iban-toiban:

toIban
=====================

    static function

.. code-block:: javascript

    web3.pi.Iban.toIban(address)

Singleton: Converts an Pchain address to a direct IBAN address.

----------
Parameters
----------

1. ``String``: the Pchain address to convert.

-------
Returns
-------

``String`` - The IBAN address.

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"


------------------------------------------------------------------------------

.. _pi-iban-fromaddress:

    static function, return IBAN instance

fromAddress
=====================

.. code-block:: javascript

    web3.pi.Iban.fromAddress(address)

Singleton: Converts an Pchain address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the Pchain address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.fromAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _pi-iban-frombban:

    static function, return IBAN instance

fromBban
=====================

.. code-block:: javascript

    web3.pi.Iban.fromBban(bbanAddress)

Singleton: Converts an BBAN address to a direct IBAN instance.

----------
Parameters
----------

1. ``String``: the BBAN address to convert.

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.fromBban('ETHXREGGAVOFYORK');
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _pi-iban-createindirect:

    static function, return IBAN instance

createIndirect
=====================

.. code-block:: javascript

    web3.pi.Iban.createIndirect(options)

Singleton: Creates an indirect IBAN address from a institution and identifier.

----------
Parameters
----------

1. ``Object``: the options object as follows:
    - ``institution`` - ``String``: the institution to be assigned
    - ``identifier`` - ``String``: the identifier to be assigned

-------
Returns
-------

``Object`` - The IBAN instance.

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.createIndirect({
        institution: "XREG",
        identifier: "GAVOFYORK"
    });
    > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}


------------------------------------------------------------------------------

.. _pi-iban-isvalid:

    static function, return boolean

isValid
=====================

.. code-block:: javascript

    web3.pi.Iban.isValid(ibanAddress)

Singleton: Checks if an IBAN address is valid.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to check.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    web3.pi.Iban.isValid("XE81ETHXREGGAVOFYORK");
    > true

    web3.pi.Iban.isValid("XE82ETHXREGGAVOFYORK");
    > false // because the checksum is incorrect


------------------------------------------------------------------------------

prototype.isValid
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.isValid()

Singleton: Checks if an IBAN address is valid.

.. note:: This method also exists on the IBAN instance.

----------
Parameters
----------

1. ``String``: the IBAN address to check.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.isValid();
    > true


------------------------------------------------------------------------------

prototype.isDirect
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.isDirect()

Checks if the IBAN instance is direct.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.isDirect();
    > false

------------------------------------------------------------------------------

prototype.isIndirect
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.isIndirect()

Checks if the IBAN instance is indirect.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.isIndirect();
    > true

------------------------------------------------------------------------------

prototype.checksum
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.checksum()

Returns the checksum of the IBAN instance.

-------
Returns
-------

``String``: The checksum of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.checksum();
    > "81"


------------------------------------------------------------------------------

prototype.institution
=====================

    method of Iban instance


.. code-block:: javascript

    web3.pi.Iban.prototype.institution()

Returns the institution of the IBAN instance.

-------
Returns
-------

``String``: The institution of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.institution();
    > 'XREG'


------------------------------------------------------------------------------

prototype.client
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.client()

Returns the client of the IBAN instance.

-------
Returns
-------

``String``: The client of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban("XE81ETHXREGGAVOFYORK");
    iban.client();
    > 'GAVOFYORK'

------------------------------------------------------------------------------

prototype.toAddress
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.toString()

Returns the Pchain address of the IBAN instance.

-------
Returns
-------

``String``: The Pchain address of the IBAN

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toAddress();
    > '0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8'


------------------------------------------------------------------------------

prototype.toString
=====================

    method of Iban instance

.. code-block:: javascript

    web3.pi.Iban.prototype.toString()

Returns the IBAN address of the IBAN instance.

-------
Returns
-------

``String``: The IBAN address.

-------
Example
-------

.. code-block:: javascript

    const iban = new web3.pi.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
    iban.toString();
    > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'

