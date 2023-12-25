const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === undefined || members === null) {
    return false;
  }
  let temp = [];
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      temp[i] = members[i].trim()[0].toUpperCase();
    }
  }
  if (temp !== null && temp.length > 0) {
    return temp.sort().join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
