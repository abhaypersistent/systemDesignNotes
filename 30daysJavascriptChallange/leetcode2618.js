

var checkInstanceOf = function(obj, classFunction){
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    let currPrototype = Object.getPrototypeOf(obj);

    while(currPrototype !== null){
        if(currPrototype === classFunction.prototype){
            return true;
        }
        currPrototype = Object.getPrototypeOf(currPrototype);
    }

    return false;
}


// 2693 : call function with custom context

Function.prototype.callPolyfill = function(context, ...args){
    return this.bind(context, args);
    return this.apply(context, ...args);
}

function increment(){
    this.count++;
    return this.count;
}

increment.callPolyfill({count:1})


// event emitter

class EventEmitter{

    constructor(){
        this.eventMap = new Set();
    }

    subscribe(event, cb){
        if(!this.eventMap.hasOwnProperty(event)){
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb);
        return {
            unsubscribe : () => {
                this.eventMap[event].delete(cb);
            }
        }
    }


    emit(event, args = []){
        const res = [];

        (this.eventMap[event] || [])
            .forEach((cb) => {
                res.push(cb(...args))
            });

        return res;
    }

}


const emitter = new EventEmitter();


function onClickCallbacl() {return 99};

const sub = emitter.subscribe('onclick',onClickCallbacl)

emitter.emit('onCLick');
sub.unsubscribe();
emitter.emit('onClick');


// array Wrapper
var ArrayWrapper = function(nums){
    this.nums = nums;

}

ArrayWrapper.prototype.valueOf = function(){
    return this.nums.reduce((n,a) => n + a , 0);
}

ArrayWrapper.prototype.toString = function(){
    return `[${String(this.nums)}]`
}

const obj1 = new ArrayWrapper([1,2])
const obj2 = new ArrayWrapper([3,4])

console.log(obj1 + obj2) //10

console.log(String(obj1)) //"[1,2]"
String(obj2) //"[3,4]"