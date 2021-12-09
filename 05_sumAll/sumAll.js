const sumAll = function(firstInt,secondInt) {
  
  if (firstInt < 0 || secondInt < 0 || typeof(firstInt) != typeof(3) || 
    typeof(secondInt) != typeof(3)) {
    return 'ERROR';
  } else {
      let i = Math.min(firstInt,secondInt);
      let j = Math.max(firstInt,secondInt);
      let collectSum = i;
      while (i < j) {
        collectSum += (i + 1);
        i++;
  }
  return collectSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
