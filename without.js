const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  return isEqual
    ? console.log(`🟢Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
};

const without = function(source, itemsToRemove) {
  let remainingItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      remainingItems.push(source[i]);
    }
  }
  return console.log(remainingItems);
};

without([1, 2, 3], [3]);
without(["1", "2", "3"], ["1", "2", 3]);

const colors = ["red", "orange", "yellow"];
without(colors, ["yellow", "orange"]);
assertArraysEqual(colors, ["red", "orange", "yellow"]);

