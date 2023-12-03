const removeFromArray = function(arr, ...remove) {
  return arr.filter(num => !remove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
