// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);
// eslint-disable-next-line no-unused-vars
const d = console.debug.bind(console);
// eslint-disable-next-line no-unused-vars
const w = console.warn.bind(console);
// eslint-disable-next-line no-unused-vars
const e = console.error.bind(console);

// [Function Implementation]
const initAlphabet = function() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let returnObj = {};

  for (const letter of alphabet) {
    returnObj[letter] = 0;
  }

  return returnObj;
};

const countLetters = function(given) {
  const returnObj = initAlphabet();

  for (const char of given) {
    if (char.toUpperCase() in returnObj) {
      returnObj[char.toUpperCase()]++;
    }
  }

  for (const entry in returnObj) {
    if (!returnObj[entry]) {
      delete returnObj[entry];
    }
  }

  return returnObj;
};

// [Export]
module.exports = countLetters;