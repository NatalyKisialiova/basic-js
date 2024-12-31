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
  let numberStr = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < numberStr.length; i+= 1) {
    let newNumberStr = numberStr.slice(0, i).concat(numberStr.slice(i + 1));
    maxNumber = Math.max(maxNumber, Number(newNumberStr));
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
