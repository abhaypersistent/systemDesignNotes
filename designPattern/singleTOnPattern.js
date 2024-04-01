// singleton are classes whic can be instantiated once and can 
// be accessed globally. This single instance can be shared throughout our application,
// which makes singletons great for managing the global state in the application

// let's take an example in which we have created a counter class

let counter = 0;

class Counter {
    getInstance(){
        return this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance());

// example of in which only one instance can be created example

let instance;

let newCounter

class NewCounter{
    constructor(){
        if(instance){
            throw new Error("You can create only one instance")
        }
        instance = this;
    }

    getInstance() {
        return this;
      }
    
      getCount() {
        return counter;
      }
    
      increment() {
        return ++counter;
      }
    
      decrement() {
        return --counter;
      }
}

const singletonCounter = Object.freeze(new NewCounter());
export default singletonCounter;

const counter11 = new NewCounter();
const counter22 = new NewCounter();