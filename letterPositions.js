//A function that returns the and object showing index number where each letter appears in a string

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //Initial if-statement skips over spaces in a sentence so that only letters are considered 
    if (sentence[i] !== " ") {
      if (Array.isArray(results[sentence[i]])) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// module.exports = letterPositions

// //TESTS

// const assertArraysEqual = require('./assertArraysEqual');

// console.log(letterPositions('LHL'));
// console.log(letterPositions('hello'));
// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions('hello').e, [1]); 
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]); 