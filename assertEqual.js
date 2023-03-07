const assertEqual = function(actual, expected) {
  return actual === expected
    ? console.log("🟢Assertion Passed: " + actual + " === " + expected)
    : console.log("🔴Assertion Failed: " + actual + " !== " + expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);
assertEqual("Hello World", "Hello World");
