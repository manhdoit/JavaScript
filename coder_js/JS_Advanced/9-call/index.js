function greeting() {
    console.log(`Hi! ${this.name}, ${typeof(this.hobbies)}`);
}
var man = {
    name: 'Ricky',
    age: 20,
    hobbies: ['football', 'read', 'write', 'listen']
}
var newOne = greeting.call(man);
console.log(newOne);
