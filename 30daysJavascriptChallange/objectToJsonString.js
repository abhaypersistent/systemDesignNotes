// 

var jsonStringiFy = function(object){
    if(object === null || object === undefined){
        return String(object);
    }

    // Array []
    if(Array.isArray(object)){
        const values = object.map((obj) => jsonStringiFy(obj));
        return `[${values.join(",")}]`;
    }

    // object {}
    if(typeof object === "object"){
        const keys = Object.keys(object);
        const keyValuPair = keys.map((key) => `"${key}" : ${jsonStringiFy(object[key])}`);
        return `{${keyValuPair.join(",")}}`;
    }  
    
    // Strings ""
    if( typeof object === 'string'){
        return  `"${String(object)}"`;
    }

    return String(object);
}