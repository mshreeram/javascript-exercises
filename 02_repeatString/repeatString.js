const repeatString = function(givenStr, numberOfIterations) {
  if (numberOfIterations < 0) {
    return 'ERROR'
  }
  let newStr = "";
  for (let i = 0; i < numberOfIterations; i++) {
    newStr += givenStr;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
