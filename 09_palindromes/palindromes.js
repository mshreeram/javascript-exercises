const palindromes = function (str) {
  str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let revStr = str.split("").reverse().join("").replace(" ", "");
  if (str.replaceAll(" ", "") === revStr.replaceAll(" ", "")) {
    return true;
  }
  return false;
};
palindromes('Animal loots foliated detail of stool lamina.')

// Do not edit below this line
module.exports = palindromes;
