//Used to find out if two objects are strictly equal.

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //Assign the keys of each object to variables
  const keysArr1 = Object.keys(object1);
  const keysArr2 = Object.keys(object2);
  //If the length of each array of keys isn't equal, return false
  if (keysArr1.length !== keysArr2.length) {
    return false;
  };

  for (const key of keysArr1) {
    //If the value of a key is an array, 
    if (Array.isArray(object1[key], object2[key])) {
      //Check to see if those arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    //If the values of a key aren't an array, return false if they're not equal
    } else if (object1[key] !== object2[key]) {
      return false;
    };
  };
  return true;
};

module.exports = eqObjects;

//TESTS

// const assertEqual = require('./assertEqual');

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const isEqualOne = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// const isEqualTwo = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

// assertEqual(isEqualOne, true);
// assertEqual(isEqualTwo, false);






