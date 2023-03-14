//Determine whether an item in an object (itemsToCount) should be in an array, 
// and if so, then count how many times that item appears in said array. If 
// desired item is not in the array, 'undefined' is returned.

const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;

//TESTS

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const assertEqual = require('./assertEqual');

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

