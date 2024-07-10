const palindromes = (word) => {
  let strippedWord = word.toLowerCase().replace(/\W/g, "");
  return strippedWord === strippedWord.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
