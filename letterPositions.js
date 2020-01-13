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
    returnObj[letter] = [];
  }

  return returnObj;
};

const letterPositions = function(given) {
  const returnObj = initAlphabet();

  for (let i = 0; i < given.length; i++) {
    if (given[i].toUpperCase() in returnObj) {
      returnObj[given[i].toUpperCase()].push(i);
    }
  }

  for (const entry in returnObj) {
    if (returnObj[entry].length === 0) {
      delete returnObj[entry];
    }
  }

  return returnObj;
};

// [Export]
module.exports = letterPositions;