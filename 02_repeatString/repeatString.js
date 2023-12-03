const repeatString = function(word, num) {
  let result = '';

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i ++) {
    result += word;
  }

  return result;
};

console.log(repeatString("hey", 0));

// Do not edit below this line
module.exports = repeatString;
