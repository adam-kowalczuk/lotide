//Returns every item of an array--except the first one. 

const tail = function(arr) {
  if (!arr.length) {
    return []};
  if (arr.length === 1) {
    return []};
  return arr.slice(1);
};

module.exports = tail;

