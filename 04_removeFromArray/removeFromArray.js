const removeFromArray = function (array, ...toRemove) {
    const newArray = array.filter(element => !toRemove.includes(element));
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
// npm test removeFromArray.spec.js