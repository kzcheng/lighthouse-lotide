// [Shortened Commonly Used Functions]
// eslint-disable-next-line no-unused-vars
const l = console.log.bind(console);

// [Function Implementation]
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

// [Export]
module.exports = assertEqual;