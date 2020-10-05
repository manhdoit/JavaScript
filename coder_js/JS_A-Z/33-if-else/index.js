function tossCoin() {
    var value = Math.random();
    if(value < 0.5) {

    } else {

    }
}

function countBills(bills) {
    var total = 0;
    for(var bill of bills) {
        if(!bill.fake){
            total += bill.value;
        } else {
            console.log('fake', bill);
            break;
        }
    }
    return total;
}
var bills = [
    {value: 50},
    {value: 100},
    {value: 100, fake: true},
    {value: 200},
    {value: 500}
]
var total = countBills(bills);
console.log(total);