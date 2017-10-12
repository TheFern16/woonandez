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

const upperCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      resolve(text.toUpperCase())
    } else {
      reject(Error('woopsie'));
    }
  });
}

module.exports = {
  addOxfordComma,
  upperCase
}