//Loop over each letter in a string (ignoring spaces) and returning a total letter count. 

const countLetters = function(sentence) {
  const finalCount = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (!finalCount[letter]) {
        finalCount[letter] = 0;
      };
      finalCount[letter]++;
    }
  }
  return finalCount;
};

module.exports = countLetters;
