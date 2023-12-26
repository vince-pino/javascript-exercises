const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	if (arr.length === 0) return 0;
  if (arr. length === 1) return arr[0];
  if (arr.length > 1) {
    let sum = 0;
    console.log(sum);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
};

const multiply = function(arr) {
  let product = arr[0];
  for (let i = 1; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
};

const power = function(x, pow) {
	return x ** pow;
};

const factorial = function(x) {
	if (x === 0) return 1;
  if (x === 1) return 1;
  if (x > 1) {
    let factorial = 1;
    for (let i = 1; i <= x; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
