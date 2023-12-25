const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0,
    numDigits = [];
  while (n) {
    numDigits.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let indexNum = 0; indexNum < numDigits.length; indexNum++) {
    let k = 0;
    for (var i = numDigits.length - 1; i >= 0; i--) {
      if (i !== indexNum) {
        k = k * 10 + numDigits[i];
      }
    }
    result = Math.max(k, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
