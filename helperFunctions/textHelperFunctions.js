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
  let result;
  return new Promise((resolve, reject) => {
    if (text) {
      let encryptedText = cipher.cipher.update(text, 'utf8', 'hex');
      encryptedText += cipher.cipher.final('hex');
      result = encryptedText;
      resolve(result);
    } else {
      reject(Error('woopsie'));
    }
  });
}

module.exports = {
  addOxfordComma,
  encryptText
}