// [Shortened Commonly Used Functions]
const l = console.log.bind(console);
const d = console.debug.bind(console);
const w = console.warn.bind(console);
const e = console.error.bind(console);

// [Function Implementation]
const countOnly = function(allItems, itemsToCount) {
  const tally = {};
  const returnObj = {};

  for (const item of allItems) {
    tally[item] = (tally[item]) ? tally[item] + 1 : 1;
  }

  for (const name in itemsToCount) {
    if (itemsToCount[name] && tally[name]) {
      returnObj[name] = tally[name];
    }
  }

  return returnObj;
};

// [Testing Code]
// l("test");
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
l(result);

// let a = {};
// a["test"] = 12;
// l(a);