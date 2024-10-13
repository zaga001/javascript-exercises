const fibonacci = function(number) {
    number = Number(number);
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    let num1 = 0, num2 = 1, nextNum;
    for (let i = 1; i < number; i++) {
        nextNum = num1 + num2;
        num1 = num2
        num2 = nextNum
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;