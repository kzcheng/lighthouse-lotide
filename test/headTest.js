// [Requirements]
// eslint-disable-next-line no-unused-vars
const assertEqual = require('../assertEqual');
// eslint-disable-next-line no-unused-vars
const head = require('../head');

assertEqual(head([1,2,3]), 1);
assertEqual(head([]), undefined);