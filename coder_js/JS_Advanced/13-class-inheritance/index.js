// // inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log('Eating...');
//     }
// }
//
// class Bird extends Animal {
//     fly () {
//         console.log('Flying......')
//     }
// }
//
// class Parrot extends Bird {
//     speak() {
//         console.log('Speaking.........');
//     }
// }
//
// const bird = new Parrot('Thusa');
// console.log(bird.name);
// bird.speak();
// bird.speak();


function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log('Eating........')
}

function Bird() {
    Animal.apply(this, arguments);
}
Bird.prototype = new Animal();
var Parrot = new Bird('asdfsadfsf')
console.log(Parrot.name)
Parrot.eat();
