//Removes items from an array, and returns array of remaining items. 

const without = function(source, itemsToRemove) {
  let remainingItems = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      remainingItems.push(item);
    }
  }
  console.log(remainingItems);
};

module.exports = without;

