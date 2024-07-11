const findTheOldest = function (people) {
  return people.reduce((acc, curr) => {
    let yearOfDeath;
    curr.yearOfDeath
      ? (yearOfDeath = curr.yearOfDeath)
      : (yearOfDeath = new Date().getFullYear());

    if (JSON.stringify(acc) === "{}")
      return { age: yearOfDeath - curr.yearOfBirth, ...curr };

    return yearOfDeath - curr.yearOfBirth > acc.age ? curr : acc;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
