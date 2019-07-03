
.. include:: include_announcement.rst

====
Web3
====

    The Web3 class is a wrapper to house all Pchain related modules.


Initiating of Web3
=====================

----------
Parameters
----------

1. ``provider`` - ``string|object``: A URL or one of the Web3 provider classes.
2. ``net`` - ``net.Socket`` (optional): The net NodeJS package.
3. ``options`` - ``object`` (optional) The Web3 :ref:`options <web3-module-options>`


-------
Example
-------

.. code-block:: javascript

    import Web3 from 'pweb3';

    // "Web3.givenProvider" will be set in a Pchain supported browser.
    const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:6970/pchain', net, options);

    > web3.pi
    > web3.shh
    > web3.utils
    > web3.version


------------------------------------------------------------------------------


Web3.modules
=====================

    This Static property will return an object with the classes of all major sub modules, to be able to instantiate them manually.

-------
Returns
-------

``Object``: A list of modules:
    - ``Pi`` - ``Function``: the Pi module for interacting with the Pchain network see :ref:`web3.pi <pi>` for more.
    - ``Net`` - ``Function``: the Net module for interacting with network properties see :ref:`web3.pi.net <pi-net>` for more.
    - ``Personal`` - ``Function``: the Personal module for interacting with the Pchain accounts see :ref:`web3.pi.personal <pi-personal>` for more.
    - ``Shh`` - ``Function``: the Shh module for interacting with the whisper protocol see :ref:`web3.shh <shh>` for more.

-------
Example
-------

.. code-block:: javascript

    Web3.modules
    > {
        Pi(provider, net?, options?),
        Net(provider, net?, options?),
        Personal(provider, net?, options?),
        Shh(provider, net?, options?),
    }


.. include:: include_package-core.rst

------------------------------------------------------------------------------

version
=====================

    Property of the Web3 class.

.. code-block:: javascript

    web3.version

Contains the version of the ``web3`` wrapper class.

-------
Returns
-------

``String``: The current version.

-------
Example
-------

.. code-block:: javascript

    web3.version;
    > "1.0.0"
