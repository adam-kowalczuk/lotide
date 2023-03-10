const assertEqual = function (actual, expected) {
  return actual === expected
    ? console.log(`🟢Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
};

//^^^ An assertion function that tests for the equality of primitive values. Please see assertEqual.js for a more detailed description. 

const findKey = function (obj, callback) {
  //Loops through object passed into the first arugment
  for (const key in obj) {
    //If the value of the key passed into the callback function is true
    if (callback(obj[key])) {
      //Return the key 
      return key;
    }
  }
  //If the callback function does not find that any of the values passed into it are true, return undefined
  return undefined;
}

const michelinRestaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}

console.log(findKey(michelinRestaurants, x => x.stars === 2)); // -> 'noma'
console.log(findKey(michelinRestaurants, x => x.stars === 5)); // -> 'undefined' (There is no such thing as a Michelin 5-starred restaurant)

// Assertion Tests

const twoStarredRestaurant = findKey(michelinRestaurants, x => x.stars === 2);

assertEqual(twoStarredRestaurant, 'noma'); // -> Passed
assertEqual(twoStarredRestaurant, 'Ora'); // -> Failed