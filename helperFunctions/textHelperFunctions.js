const addOxfordComma = (text) => {
  return new Promise((resolve, reject) => {
    if (text.replace(/( and)/gi, ", and")) {
      let testDouble = text.replace(/(,+)/gi, '');
      let addOComma = testDouble.replace(/( and)/gi, ', and');
      resolve(addOComma);
    } else {
      reject(Error('incorrect input'));
    }
  });
}

const upperCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      resolve(text.toUpperCase());
    } else {
      reject(Error('incorrect input'));
    }
  });
}

const lowerCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      resolve(text.toLowerCase());
    } else {
      reject(Error('incorrect input'));
    }
  });
}

const camelCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {

    } else {
      reject(Error('incorrect input'))
    }
  }
}

module.exports = {
  addOxfordComma,
  upperCase,
  lowerCase
}