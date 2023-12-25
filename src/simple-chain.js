const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  pos: 0,
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain[this.pos] = `( ${value} )`;
    this.pos++;
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length) {
      this.pos = 0;
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    }
    if (position > 0 && position < this.chain.length) {
      let temp = [];
      let j = 0;
      for (let i = 0; i < this.chain.length; i += 1) {
        if (i !== position - 1) {
          temp[j] = this.chain[i];
          j++;
        }
      }
      this.pos--;
      this.chain = temp;
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp = this.chain.join('~~');
    this.pos = 0;
    this.chain = [];
    return temp;
  }
};

module.exports = {
  chainMaker
};
