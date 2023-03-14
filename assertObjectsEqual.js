//Test whether two different objects are strictly equal

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  const isEqual = eqObjects(obj1, obj2);
  if (isEqual) {
    console.log(`🟢🟢🟢Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;

//TESTS

// assertObjectsEqual({a: 1, b: [2, 3]}, {a: 1, b: [2, 3]}); //Passes
// assertObjectsEqual({a: 1, b: 1}, {a: 1, b: 2}); //Fails