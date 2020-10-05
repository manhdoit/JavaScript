// // Constructor function
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`)
// }
//
// const mouse = new Mouse('mickey');
// mouse.run();

class Mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is runninggggg`)
    }
}

const mouse = new Mouse('Micky99i');
mouse.run();