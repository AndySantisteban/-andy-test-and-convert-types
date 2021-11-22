// @ts-nocheck

const convert = {
  /**
   * This function converts a numbers to a binary.
   * @param {number} number 
   * @returns number.toString(2)
   */
  numberToBinary: function (/** @type {{ toString: (arg0: number) => any; }} */ number) {
    return number.toString(2);
  },
  /**
   * This function converts a text to a Binary.
   * @param {string} text 
   * @returns {string} text
   */
  textToBinary: function (/** @type {string} */ text) {
    return text
      .split('')
      .map((c) => c.charCodeAt(0).toString(2))
      .join(' ');
  },
  /**
   * This function converts a binary to a text.
   * @param {string} binary 
   * @returns {string} binary
   */
  binaryToText: function (/** @type {string} */ binary) {
    return binary
      .split(' ')
      .map((c) => String.fromCharCode(parseInt(c, 2)))
      .join('');
  },
  /**
   * This function converts a binary to a number.
   * @param {string} binary 
   * @returns {number} binary
   */
  binaryToNumber: function (/** @type {string} */ binary) {
    return parseInt(binary, 2);
  },
  /**
   * 
   * @param {string} text 
   * @returns {string} text
   */
  textToB64: function (/** @type {string} */ text) {
    return Buffer.from(text).toString('base64');
  },
  /**
   * 
   * @param {string} token 
   * @returns {JSON} token
   */
  decodeJwt: function parseJwt(/** @type {string} */ token) {
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
  },
};

module.exports = convert;

