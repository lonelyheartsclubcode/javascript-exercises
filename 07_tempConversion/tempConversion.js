const ftoc = function(degrees) {
  let farDegrees = (degrees - 32) * (5/9);
  return Math.round(farDegrees * 10) / 10;
};

const ctof = function(degrees) {
  let celDegrees = degrees * (9 / 5) + 32;
  return Math.round(celDegrees * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
