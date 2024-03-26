// return type function 

const createHeeloWorld = () => {
    return function(){
        return "hellow world"
    }
}



const a = createHeeloWorld();



// day 2

var day2 = function(n){
    let count = n;

    return function(){
        return count++;
    }
}

class Counter{
    constructor(n){
        this.n = n;
    }


    increment(){
        return this.n++;
    }


}

const counter2 = day2(10);
const cn = new Counter(10)

// console.log(cn.increment());
// console.log(cn.increment());
// console.log(cn.increment());

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


let createCounter = function(init){
    let count = init;

    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    function reset(){
        count = init;
        return count;
    }


    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }
}