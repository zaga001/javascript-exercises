const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    return array.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath || currentYear)- oldest.yearOfBirth;
        const currentAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        return currentAge > oldestAge ? person : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
