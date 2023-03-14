//Loops through an array, pushing all values to a new array, until a particular value is found. 
const takeUntil = function(array, callback) {
  let results = [];
  //Looping through the array passed in as the first argument
  for (const item of array) {
    //If the value passed into the callback matches the condition set by the callback, break the loop.
    if (callback(item)) {
      break;
    }
    //Until then, push each item in the array into results.
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;

//TESTS

// const assertArraysEqual = require('./assertArraysEqual');

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);





