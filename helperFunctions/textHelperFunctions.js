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

const createString = (text) => {
  let strip = text.replace(/[^a-z ]/gi, '')
  let first = strip.split(' ')[0].toLowerCase();
  let second = strip
    .toLowerCase()
    .split(' ')
    .slice(1)
    .map(val => val[0].toUpperCase() + val.slice(1))
    .join('');
  return first.concat(second);
}

const camelCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      let strip = text.replace(/[^a-z ]/gi, '')
      let first = strip.split(' ')[0].toLowerCase();
      let second = strip
        .toLowerCase()
        .split(' ')
        .slice(1)
        .map(val => val[0].toUpperCase() + val.slice(1))
        .join('');
      resolve(first.concat(second));
    } else {
      reject(Error('incorrect input'));
    }
  });
}

const altCase = (text) => {
  return new Promise((resolve, reject) => {
    if (text) {
      const string = text.toLowerCase();
      let result = '';
      for (var i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
          result += string[i].toUpperCase();
        } else {
          result += string[i];
        }
      }
      resolve(result);
    } else {
      reject(Error('incorrect input'));
    }
  });
}

module.exports = {
  addOxfordComma,
  upperCase,
  lowerCase,
  camelCase,
  altCase
}
