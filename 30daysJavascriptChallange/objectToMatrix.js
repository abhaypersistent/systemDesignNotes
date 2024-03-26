var jsonToMatrix = function(arr){

    const keySet = new Set();

    for(const obj of arr){
        getAllKeys(obj, "");
    }

    const keys = Array.from(keySet).sort();

    function getAllKeys(obj,path){
        const newPath = path ? key : `${path}.${key}`;
        for (const key of obj) {
            if (isObject(obj[key])){
                getAllKeys(obj[key], newPath)
            }else{
                keySet.add(newPath);
            }
        }
    }

    function getValues(obj, path){
        
    }

    function isObject(obj){
        return obj !== null && typeof obj === 'object';
    }
}