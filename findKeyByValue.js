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
const findKeyByValue = function(list, value) {
  for (const entry in list) {
    if (list[entry] === value) {
      return entry;
    }
  }
  
  return undefined;
};

// [Testing Code]
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

d(findKeyByValue(bestTVShowsByGenre, "The Wire"));
d(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));