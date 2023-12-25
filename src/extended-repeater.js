const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let result = '';
  for (let i = 0; i < repeatTimes; i += 1) {
    if (i !== 0) {
      result = result.concat(separator);
    }
    result = result.concat(str);
    if (options.addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j += 1) {
        if (j !== 0) {
          result = result.concat(additionSeparator);
        }
        result = result.concat(options.addition);
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
