const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiMoves = countHanoiMoves(disksNumber);
  let time = hanoiMoves/(turnsSpeed/3600);
  return {
    turns: hanoiMoves,
    seconds: Math.trunc(time)
  }
}

function countHanoiMoves(n) {
  if (n === 0) return 0;
  return 2 * countHanoiMoves(n - 1) + 1
}

module.exports = {
  calculateHanoi
};
