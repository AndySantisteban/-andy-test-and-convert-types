// @ts-check

const convert = {
  numberToBinary: function (/** @type {{ toString: (arg0: number) => any; }} */ number) {
    return number.toString(2);
  },
  textToBinary: function (/** @type {string} */ text) {
    return text
      .split('')
      .map((c) => c.charCodeAt(0).toString(2))
      .join(' ');
  },
  binaryToText: function (/** @type {string} */ binary) {
    return binary
      .split(' ')
      .map((c) => String.fromCharCode(parseInt(c, 2)))
      .join('');
  },
  binaryToNumber: function (/** @type {string} */ binary) {
    return parseInt(binary, 2);
  },
  textToB64: function (/** @type {string} */ text) {
    return Buffer.from(text).toString('base64');
  },
  decodeJwt: function parseJwt(/** @type {string} */ token) {
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
  },
};
module.exports = convert;
