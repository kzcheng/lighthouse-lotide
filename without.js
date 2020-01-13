// [FUNCTION IMPLEMENTATION]
const without = function(source, itemsToRemove) {
  if (!itemsToRemove) {
    return source;
  }

  let returnObj = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      returnObj.push(source[i]);
    }
  }

  return returnObj;
};

// [Export]
module.exports = without;