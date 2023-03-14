//Loops through an array, applying a callback function to each item, and then returns an array with each altered item. 

const map = function(array, callback) {
  const results = [];
  //Loops through the array passed in as the first argument.
  for (let item of array) {
    //Each item is passed to the callback function, then pushed to the result array. 
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TESTS

// const assertArraysEqual = require('./assertArraysEqual');

// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5, 6];
// const numStr = ["1", "2", "3", "4", "5", "6"]

// const results1 = map(words, word => word[0]);
// const results2 = map(numbers, number => number * 2);
// const results3 = map(numStr, str => Number(str));

// assertArraysEqual((results1), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual((results2), [ 2, 4, 6, 8, 10, 12 ]);
// assertArraysEqual((results3), [ 1, 2, 3, 4, 5, 6 ]);