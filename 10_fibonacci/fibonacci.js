const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1 || i === 2) {
      arr.push(1);
    }
    else {
      arr.push(arr[i-2] + arr[i-3])
    }
  }

  return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
