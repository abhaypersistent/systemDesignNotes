// A mixin is an object that we can use in order to add resuable functionality
// to another object or class without using inheritance
// Sole purpose is to add functionality to object or class without inheritance

class Dog {
    constructor(name){
        this.name = name;
    }
}

const animalFunctionality  = {
    walk: () => { console.log("walking"); },
    sleeping : () => { console.log("Sleeping"); },
}

const dogFunctionality = {
    bark: () => console.log("bark"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing"),
    walk() {
        super.walk()
    },
    sleep(){
        super.sleeping();
    }
}

Object.assign(dogFunctionality, animalFunctionality);

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
