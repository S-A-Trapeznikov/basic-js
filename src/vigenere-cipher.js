const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.square = [];
  }
  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }
  getSquare() {
    return this.square;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }

    let encryptMessage = "";
    let newKey = this.repeatString(key, message);
    this.generateSquare();
    let k = 0;
    for (let it = 0; it < message.length; it++) {
      let i = this.alphabet.indexOf(message[it].toUpperCase());
      let j = this.alphabet.indexOf(newKey[k].toUpperCase());
      if (i === -1) {
        encryptMessage += message[it];
        k--;
      } else {
        encryptMessage += this.square[i][j];
      }
      k++;
    }
    if (!this.direct) {
      return encryptMessage.split('').reverse().join('');
    }
    return encryptMessage;
  }
  decrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!');
    }
    let decryptMessage = "";
    let newKey = this.repeatString(key, message);
    this.generateSquare();
    let k = 0;
    for (let it = 0; it < message.length; it++) {
      let i = this.alphabet.indexOf(newKey[k].toUpperCase());
      let j = this.square[i].indexOf(message[it].toUpperCase());
      if (j === -1) {
        decryptMessage += message[it];
        k--;
      } else {
        decryptMessage += this.alphabet[j];
      }
      k++;
    }
    if (!this.direct) {
      return decryptMessage.split('').reverse().join('');
    }
    return decryptMessage;
  }

  repeatString(key, message) {
    while (key.length < message.length) {
      key = key.concat(key);
    }
    return key;
  }

}

module.exports = {
  VigenereCipheringMachine
};
