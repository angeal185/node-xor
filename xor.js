

function XOR(str, key) {
    let data = '';
    if (!str) {
      console.log('no string chosen!')
      return;
    }

    if ((typeof str) !== ("string")){
      console.log('input data must be a string')
      return;
    }

    if (!key) {
      console.log('no key chosen!')
      return;
    } else {
      key = Math.floor(key);
    }

    if (key < 1) {
      console.log('key must be equal to or greater than 1')
      return;
    }

    if (key > 40) {
      console.log('key must be equal to or less than 40')
      return;
    }

    for (var i = 0; i < str.length; ++i) {
      data += String.fromCharCode(key ^ str.charCodeAt(i))
    }
    return data;
}

module.exports = XOR;
