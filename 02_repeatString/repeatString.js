const repeatString = function(string, num) {
  if (num < 0) return 'ERROR';
  
  let combinedString = ``;
  for (let i = 0; i < num; i++) {
    combinedString += string;
  }
  return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
