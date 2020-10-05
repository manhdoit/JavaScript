var Mouse = require('./mouse')
var Cat = require('./cat')
function Human(name, age) {
    this.name = name;
    this.age = age;
}
Human.prototype.name = 'Donny'
Human.prototype.age = 29;

var manhdo = new Human('Nguyen Hong',28);



function VietNam(){

}

VietNam.prototype.capital = 'Ha Noi'
VietNam.prototype.area = 1231231;
var country = new VietNam();
console.log(country.area)