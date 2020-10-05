function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum,num) => sum + num, 0);
}

function average() {
    const x = sum.apply(null, arguments);
    return x/arguments.length;
}

var sumLog = sum(1,2,3,4,5,6);
var xxx = average(1,2,3,4,5,6);
// average()
console.log(xxx)