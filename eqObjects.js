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
const eqObjects = function(object1, object2) {
};


// [Testing Code]
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
l(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
l(eqObjects(ab, abc)); // => false