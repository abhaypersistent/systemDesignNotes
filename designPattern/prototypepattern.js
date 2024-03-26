// The prototype pattern is a useful way to share propertied among many 
// objects of the same type. The prototype is an object that's native to javascript and
// can be accessed by objects through the prototype chain

class Msg{
    constructor(name){
        this.name = name;
    }

    bark(){
        return "chant and be happy";
    }
}


Msg.prototype.play = () => console.log(`Playing all`);
const msg1 = new Msg("HII")
const msg2 = new Msg("Be There")
const msg3 = new Msg("You are alone")

msg1.play();
msg2.play();

const dog = {
    bark(){
        console.log("in the barking function");
    }
}

const ms1 = Object.create(dog);

ms1.bark();

console.log(Object.keys(ms1));
console.log(Object.keys(ms1.__proto__));