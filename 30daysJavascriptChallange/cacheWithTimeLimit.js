// // function  test(param1){
// //     this.param1 = param1;
// // }

// // var TimeLimitCache = function(){
// //     this.cache = new Map();
// // }

// class TimeLimitCache {
//     constructor(){
//         this.cache = new Map();
//     }

//     set(key,val,duration){
//         const keyExist = this.cache.get(key);
//         if (keyExist){
//             clearTimeout(keyExist.timer);
//         }

//     }

//     get(key){

//     }

//     count(){

//     }
// }

// const a = new Set([1,2,3]);
// const b = new Map([
//     [1, "one"],
//     [2, "two"],
//     [4, "four"],
// ])

// console.log(a)
// console.log(a.union(b))
// console.log(b)

class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const keyExist = this.cache.get(key);
      if (keyExist)
        clearTimeout(keyExist.timer);
      const timer = setTimeout(() => this.cache.delete(key), duration);
      this.cache.set(key, { value:value, timer:timer });
      return Boolean(keyExist);
    }
  
    get(key) {
      return this.cache.has(key) ? this.cache.get(key).value : -1;
    }
  
    count() {
      return this.cache.size;
    }
  }
  
  var obj = new TimeLimitedCache();
  console.log(obj.set(1, 42, 1000)); // false
  console.log(obj.get(1)); // 42
  console.log(obj.count()); // 1