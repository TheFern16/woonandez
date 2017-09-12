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
  let encryptedText = cipher.cipher.update(text, 'utf8', 'hex');
  encryptedText += cipher.cipher.final('hex');
  return new Promise((resolve, reject) => {
    if (encryptedText) {
      resolve(encryptedText);
    } else {
      reject(Error('woopsie'));
    }
  });
}

const decryptText = (text) => {
  let decryptedText = cipher.decipher.update(text, 'hex', 'utf8');
  decryptedText += cipher.decipher.final('utf8');
  return new Promise((resolve, reject) => {
    if (decryptedText) {
      resolve(decryptedText);
    } else {
      reject(Error(reject));
    }
  });
}

module.exports = {
  addOxfordComma,
  encryptText,
  decryptText
}