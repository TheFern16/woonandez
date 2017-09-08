// const cipher = require('../hidden/config');

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
  let encryptedResult = '';
  let encryptedText = cipher.cipher.update(text, 'utf8', 'hex');
  encryptedText += cipher.cipher.final('hex');
  return new Promise((resolve, reject) => {
  encryptedResult = encryptedText;
    if (encryptedResult !== '') {
      resolve(encryptedText);
    } else {
      reject(Error('woopsie'));
    }
  });
}

const decryptText = (text) => {
  let decryptedResult = '';
  let decryptedText = cipher.decipher.update(text, 'hex', 'utf8');
  decryptedText += cipher.decipher.final('utf8');
  return new Promise((resolve, reject) => {
    decryptedResult = decryptedText;
    if (decryptedResult !== '') {
      resolve(decryptedText);
    } else {
      reject(Error(reject));
    }
  })
}

module.exports = {
  addOxfordComma,
  encryptText,
  decryptText
}