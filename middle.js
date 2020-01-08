// [FUNCTION IMPLEMENTATION]
const middle = function(array) {
  let returnArray = [];

  if (array.length <= 2) {
    return returnArray;
  } else if (array.length % 2 === 1) {
    returnArray.push(array[(array.length - 1) / 2]);
  } else {
    returnArray.push(array[array.length / 2 - 1]);
    returnArray.push(array[array.length / 2]);
  }
  
  return returnArray;
};

// [TEST CODE]
console.log(middle([1,2]));