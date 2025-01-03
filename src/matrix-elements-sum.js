const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  // matrix.forEach((row, indexRow) => row.forEach((item, indexCel) => {
  // if (matrix[indexRow - 1] && matrix[indexRow - 1][indexCel] !== 0 || indexRow === 0) {
  //   sum += item;
  // }  
  // }));
  for (let  column = 0;  column < matrix[0].length;  column += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      if(matrix[row][column] !== 0) {
        sum += matrix[row][column]; 
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
