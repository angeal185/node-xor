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


<iframe height='265' scrolling='no' title='js XOR encryption' src='//codepen.io/angeal185/embed/QJWPyr/?height=265&theme-id=dark&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/angeal185/pen/QJWPyr/'>js XOR encryption</a> by Angeal (<a href='https://codepen.io/angeal185'>@angeal185</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
