const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      if (arr[i] === '--discard-next') {
        i = i + 1;
        // j++;
      } else if (arr[i] === '--discard-prev') {
        if (j > 0 && arr[i - 2] !== '--discard-next') {
          j--;
        }
      } else if (arr[i] === '--double-next') {
        if (i != arr.length - 1) {
          result[j] = arr[i + 1];
          j++;
        }
      } else if (arr[i] === '--double-prev') {
        if (i > 0) {
          if (arr[i - 2] !== '--discard-next') {
            result[j] = arr[i - 1];
            j++;
          }
        }
      } else {
        result[j] = arr[i];
        j++;
      }
    } else {
      result[j] = arr[i];
      j++;
    }
  }
  return result;
}

module.exports = {
  transform
};
