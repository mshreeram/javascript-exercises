const sumAll = function(num1, num2) {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number') || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }
  let sum = 0;
  let [large, small] = (num1 > num2) ? [num1, num2] : [num2, num1];
  for (let i = small; i <= large; i++) {
    sum = sum + i;
  }
  return sum;
};
sumAll(123, 1)

// Do not edit below this line
module.exports = sumAll;
