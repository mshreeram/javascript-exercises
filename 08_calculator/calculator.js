const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let totalSum = 0;
  for (let num of arr) {
    totalSum = totalSum + num;
  }
  return totalSum;
};

const multiply = function(...args) {
  let product = 1;
  for (let num of args) {
    product = product * num;
  }
  return product;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

sum([1,3,5,7,9]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
