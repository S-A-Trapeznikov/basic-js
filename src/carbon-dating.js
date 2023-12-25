const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' ||  sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }
  if (!/^(\d{1,2}\.\d+)|(^\d+$)$/.test(sampleActivity)) {
    return false;
  }
  let number;
  if (sampleActivity.includes('.')) {
    number = Number(parseFloat(sampleActivity) * 100 / 100);
  } else {
    number = Number(sampleActivity) * 10 / 10;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / number) / k);
}

module.exports = {
  dateSample
};
