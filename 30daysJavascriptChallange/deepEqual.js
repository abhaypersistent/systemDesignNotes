var areDeepEqual = function (o1, o2){

    if( o1 === null || o2 === null){
        return o1 === o2;
    }
    
    if( typeof o1 !== typeof o2){
        return false;
    }

    if( typeof o1 !== 'object'){
        return o1 === o2;
    }

    // arrays 
    if(Array.isArray(o1) || Array.isArray(o2)){
        if(String(o1) !== String(o2)){
            return false;
        }

        for (let i = 0; i < o1.length; i++) {
            if(!areDeepEqual(o1[i],o2[i])){
                return false;
            }
        }
    }else{
        if(Object.keys(o1).length !== Object.keys(o2).length){
            return false;
        }

        for (const key in o1) {
           if(!areDeepEqual(o1[key],o2[key])){
                return false;
           }
        }
    }

    // object

    return true;

}

const a = [undefined];
const b = {'a':1};

console.log(a[0] === b[0]);

