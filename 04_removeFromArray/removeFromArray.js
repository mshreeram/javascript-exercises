const removeFromArray = function(arr, ...args) {
  for (let element of args) {
    if (arr.indexOf(element) === -1) {
      continue;
    } else {
      let ind = arr.indexOf(element);
      arr.splice(ind, 1);
    }
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
