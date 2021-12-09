const reverseString = function(str) {
  let orderedSentence = str.split('');
  let reversedSentence = orderedSentence.reverse();
  

  return reversedSentence.join('');
};

// Do not edit below this line
module.exports = reverseString;
