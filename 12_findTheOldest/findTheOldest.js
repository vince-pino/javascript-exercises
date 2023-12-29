const findTheOldest = function(arr) {
  return  arr.reduce((oldest, currentPerson) => {
    let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    let currentAge = getAge(currentPerson.yearOfDeath,currentPerson.yearOfBirth);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

function getAge(death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
