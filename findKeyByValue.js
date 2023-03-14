//Hunts through an object for a matching value, and returns that values key (return undefined if value does not exist in object)

const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

//TESTS

// const assertEqual = require('./assertEqual');

// const bestTVShowsByGenre = {
//   sci_fi: "Blade",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
