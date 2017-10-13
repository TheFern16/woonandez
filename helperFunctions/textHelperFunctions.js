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
      let first = text.split(' ')[0];
      let second = str.toLowerCase().split(' ').slice(1)
        .map(val => val[0].toUpperCase() + val.slice(1))
        .join('');
      resolve(first.concat(second));
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
