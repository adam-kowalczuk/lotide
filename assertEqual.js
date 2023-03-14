//An assertion test that prints whether primitive values are strictly equal;

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  };
};

module.exports = assertEqual;

//TESTS

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);