// [Imports]
// eslint-disable-next-line no-unused-vars
const assertEqual = require('../assertEqual');
// eslint-disable-next-line no-unused-vars
const tail = require('../tail');

// [Testing Code]
assertEqual(tail([1, 2, 3])[0], 2);