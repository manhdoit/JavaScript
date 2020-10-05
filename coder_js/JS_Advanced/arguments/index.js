const names = [1,2,3,4,5,6,7,8];
for(let i = 0; i < names.length; i++) {
    // console.log(names[i])
}

const obj = {
    0: 'Live',
    1: 'Chel',
    2: 'Ars',
    3: 'MC',
    length: 4
};
for (let i = 0; i < obj.length; i++) {
    // console.log(obj[i]);
}

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;

}

var total = sum(1,2,4,6,8,9);
// console.log(total);

function sum2() {
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, num){
        return sum + num;
    }, 0);
}
var total2 = sum2(1,191,2,4,6,8,9);
console.log(total2)