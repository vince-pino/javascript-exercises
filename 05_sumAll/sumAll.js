const sumAll = function(x, y) {
  let min = x;
  let max = y;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) [max, min] = arguments; // Swap values

    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }

  return sum;
}
// Do not edit below this line
module.exports = sumAll;
