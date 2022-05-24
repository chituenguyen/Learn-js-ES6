// concat() => join 2 array
// filter 
const isBigEnough=(element)=>{
    return element>10
}
console.log([12,10,5,6,7,19].filter(isBigEnough))
// forEach() => call a function for each element 
// indexOf() => return index of element 
// join()
// map() => create new array ...
let nums = [1,2,3]
let new_nums = nums.map(e=>e*2)
console.log(new_nums)
// pop() => remove last element and return element 
// push() => push element into array
// reduce() => applies 2 values of the array as to reduce it to a single value
// default left to right
console.log([1,2,3,4].reduce((a,b)=> a+b))
// reduceRight() 
// reverse()
//////////////////////////
// ES6 have find, from,keys


