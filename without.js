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

// [TEST CODE]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));