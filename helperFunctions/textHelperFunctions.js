const cipher = require('../hidden/config');

const addOxfordComma = (text) => {
  return new Promise((resolve, reject) => {
    if (text.replace(/( and)/gi, ", and")) {
      let testDouble = text.replace(/(,+)/gi, '');
      let addOComma = testDouble.replace(/( and)/gi, ', and');
      resolve(addOComma);
    } else {
      reject(Error('woopsie'));
    }
  });
}

const encryptText = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      let encryptedText = cipher.cipher.update(text, 'utf8', 'hex');
      encryptedText += cipher.cipher.final('hex');
      resolve(encryptedText);
    } else {
      reject(Error('woopsie'));
    }
  });
}

const decryptText = (text) => {
  return new Promise((resolve, reject) => {
    if (typeof text === 'string') {
      let decryptedText = cipher.decipher.update(text, 'hex', 'utf8');
      decryptedText += cipher.decipher.final('utf8');
      resolve(decryptedText);
    } else {
      reject(Error('woopsie'));
    }
  })
}

module.exports = {
  addOxfordComma,
  encryptText,
  decryptText
}