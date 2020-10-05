/*var mouse = {
    name: "Mickey",
    sayHi: function () {
        console.log('Hi, My name is', this.name);
    }
};


var say =  mouse.sayHi.bind(mouse);
say();*/

var button = document.getElementById('smartBtn');

var human = {
    name: 'Donny',
    sayHello: function() {
        alert('xin chào: '+ this.name + 'đẹp trai');
    }
};

button.addEventListener('click', human.sayHello.bind(human));

