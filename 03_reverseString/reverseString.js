const reverseString = function(word) {
  let reverseWord = "";
  for (let i = word.length-1 ; i >= 0; i--) {
    reverseWord += word[i];
  }
  console.log(word.length);
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
