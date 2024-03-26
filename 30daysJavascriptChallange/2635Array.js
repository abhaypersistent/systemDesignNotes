// passing passing as a function : strategy design pattern
// open closed strategy
var map = function(arr, fn){
    // const res = new Array(arr.length);

    // for (const i in arr) {
    //     res[i] = fn(arr[i], Number(i));
    // }

    // return res;

    // const res = [];

    // for (const key in arr) {

    // }
}

// weakly type language
// python strongly typed language
var filter = function(arr, fn){
    // return arr.filter(fn)


    const res = [];

    for (const  i in arr) {
        if(fn(arr[i], Number(i))){
            res.push(arr[i]);
        }
    }

    return res;
    // declartive programming 
}


// 2627

const nums = [1,2,7,4,5];

function fn(init, n){
    return init + n;
}

console.log(nums.reduce(fn,0));

var reduce = function (nums, fn, init){
    let res = init;

    for(let n of nums) {
        res = fn(res, n)
    }

    return res;
}