const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function lazyMan(name, logFn){
    
    function hi(args){
        console.log("HI function " + args)
        logFn(name)
        return this
    }
    
    function alertMessage(args){
        console.log("alertMessage function " + args)
        return this; 
    }
    
    return {
        hi,
        alertMessage
    }
}

lazyMan("abhay", () => console.log).hi("india").alertMessage("Chant and be happy")