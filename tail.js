const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log(`🟢Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  if (!arr.length) return [];
  if (arr.length === 1) return [];
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

