function objDiff(o1, o2){
    // only care about common keys

    // If both primitive and diff , them diff
    // if one is obj and other isnt , then diff
    // if one is array and one is obj, then diff
    // if both arr, or both obj then recursision

        if(!isObject(o1) && !isObject(o2)){
            return o1 === o2 ? {} : [o1,o2];
        }

        if(!isObject(o1) || !isObject(o2)){
            return [o1, o2];
        }

        if( Array.isArray(o1) !== Array.isArray(o2)){
            return [o1, o2]
        }

        const diff = {};

        for (const key in o1) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = objDiff(o1[key], o2[key]);
                if(Object.keys(element).length > 0){
                    diff[key] = element
                }
            }
        }

        return diff;
    

    function isObject(obj){
        return typeof obj === 'object' && obj !== null;

    }
}