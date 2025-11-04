const getAge = function (yearOfBirth, yearOfDeath) {
  const currentYear = new Date().getFullYear();

  if (!yearOfDeath) {
    yearOfDeath = currentYear;
  }

  return yearOfDeath - yearOfBirth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
