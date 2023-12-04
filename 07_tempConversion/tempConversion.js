const convertToCelsius = function(F) {
  //Farenheit to Celsius Formula
  // C = (F - 32) * 5 / 9

  const celsius = (F - 32) * 5 / 9;
  if (celsius === 0) {
    return celsius;
  }

  return Number(celsius.toFixed(1));

  /* Short solution
    return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  */
};

const convertToFahrenheit = function(C) {
  //Celsius to Farenheit Formula
  // F = C * (9 / 5) + 32

  const farenheit = C * (9 / 5) + 32;
  if (farenheit === 32) {
    return farenheit;
  }
  
  return Number(farenheit.toFixed(1));

  /* Short solution
    return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  */
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
