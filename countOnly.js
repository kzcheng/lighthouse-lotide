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

// [Export]
module.exports = countOnly;