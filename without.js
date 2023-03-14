//Removes desired items from an array, and returns array of remaining items. 

const without = function(source, itemsToRemove) {
  let remainingItems = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      remainingItems.push(item);
    }
  }
 return remainingItems;
};

module.exports = without;

//TESTS

// const assertArraysEqual = require('./assertArraysEqual');

// const withoutColors = without(["red", "orange", "yellow"], ["yellow", "orange"]);
// const withoutNumbersOne = without([1, 2, 3], [3]);
// const withoutNumbersTwo = without(["1", "2", "3"], ["1", "2", 3]);

// assertArraysEqual(withoutColors, ["red"]);
// assertArraysEqual(withoutNumbersOne, [1, 2]);
// assertArraysEqual(withoutNumbersTwo, ["3"]);
