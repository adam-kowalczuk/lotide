//Utilizes a callback method to look for a matching value in an object, and returns the key of that value. 

const findKey = function (obj, callback) {
  //Loops through object passed into the first arugment
  for (const key in obj) {
    //If the value of the key passed into the callback function returns true,
    if (callback(obj[key])) {
      //Return the first key that matches 
      return key;
    }
  }
  //If the callback function does not find that any of the values passed into it are true, return undefined
  return undefined;
}

module.exports = findKey;

//TESTS

// const assertEqual = require('./assertEqual');

// const michelinRestaurants = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }

// console.log(findKey(michelinRestaurants, x => x.stars === 2)); // -> 'noma'
// console.log(findKey(michelinRestaurants, x => x.stars === 5)); // -> 'undefined' (There is no such thing as a Michelin 5-starred restaurant (yet!))

// const twoStarredRestaurant = findKey(michelinRestaurants, x => x.stars === 2);

// assertEqual(twoStarredRestaurant, 'noma'); // -> Passed
// assertEqual(twoStarredRestaurant, 'Ora'); // -> Failed