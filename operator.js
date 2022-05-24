// Spread Operator
// ES6 provides a new operator called the spread operator. 
// The spread operator is represented by three dots “...” . 
// The spread operator converts an array into individual array elements.

function addSum(a,b,c){
    return a+b+c
}

console.log(addSum(...[1,2,3]))
console.log([...[1,2,3],4])
// array, object 