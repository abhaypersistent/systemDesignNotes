var chunk = function(arr, size) {
    const res = [];

    for (let i = 0; i < arr.length; i+= size) {
        res.push(arr.slice(i, i + size))
    }

    return res;
}

// flattern the array

var flat = function (arr, n){

    const res = [];

    function helper(arr, depth){
        for (const val of arr) {
            if(typeof val === 'object' && depth < n){
                helper(arr, depth + 1);
            }else{
                res.push(val);
            }
        }

        return res;
    }

    return helper(arr, 0);
}


// group By 

Array.prototype.groupBy = function(fn){
    // const keySet = new Set();
    const res = {};

    for (const obj of this) {
        const key = fn(obj);
        // if(!res.hasOwnProperty(key)){
        //     res[key] = [];
        // }
        res[key] = res[key] || [];
        res[key].push(obj);
    }

    return res;

}

[1,2,3].groupBy(String)



