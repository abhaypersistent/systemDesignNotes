// as our codebase grow, it becomes increasingly important to keep your code
// maintainable and seperated. The module pattern allows you to split up into smaller, reusable pieces.

// In that we keep value as private to itself the function or class and it not accessible to outside world.
// It benifit in many way.

// export function add(x,y){
//     return x + y;
// }

// export function multiply(x){
//     return x * 2;
// }

// export function square(x){
//     return x * x;
// }

function add2(...args){
    return args.reduce((acc,curr) => curr + acc);
}

console.log(add2(2,3,4,5,5))
console.log(add2(2,3,4,5,5,56))
console.log(add2(2,3,4,5,5.56,78,45555555))

// The difference between named exports and default exports, is the way the value is exported from the module, effectively changing the way we have to import the value.
