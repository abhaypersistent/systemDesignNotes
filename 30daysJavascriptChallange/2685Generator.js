var fibGenerator = function*(){
    let n1  = 0 
    let n2 = 1;

    while(true){
        yield n1;
        let temp = n2;
        n2 = n2 + n2;
        n1 = temp;
    }
}

// iterator design Pattern

const gen = fibGenerator();

console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)



// nested array generator

var inorderTraversal = function*(arr){

}


const ge1 = inorderTraversal([1,[2,3]])