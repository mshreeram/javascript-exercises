const reverseString = function(str) {
  let words = str.split('');
  let reverseWords = words.reverse();
  return reverseWords.join(''); 
};

// Do not edit below this line
module.exports = reverseString;
