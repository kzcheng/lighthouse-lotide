// [Function Implementation]
const tail = function(array) {
  if (!array) {
    return array;
  }

  return array.slice(1);
};

// [Export]
module.exports = tail;

