// [FUNCTION IMPLEMENTATION]
const flatten = function(source) {
  let returnObj = [];

  for (const element of source) {
    if (!element.isArray) {
      returnObj.push(element);
    } else {
      let flattenedElement = flatten(element);
      for (const element of source) {
        returnObj.push(element);
      }
    }
  }

  return returnObj;
};

// [TEST CODE]
console.log(flatten([1, 2, [3, 4], 5, [6]]));