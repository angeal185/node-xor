# node-xor
nodejs module for encryption with the xor cipher 

```js
const XOR = require('xor');

//encrypt
XOR('secret_key',1)
// output = "rdbsdu^jdx"

//decrypt
XOR('rdbsdu^jdx',1)
// output = "secret_key"

```
