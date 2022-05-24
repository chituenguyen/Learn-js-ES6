// Classifications function
// 1. Returning function
// 2. Parameterized functions
// 3. Rest Parameters
function fun1(...params) { 
    console.log(params.length); 
 }  
 fun1();  
 fun1(5); 
 fun1(5, 6, 7); 
 // 4. Anonymous Function ( not bound to an identifier)
 // var res = function( [arguments] ) { ... }
 // 5. The Function Constructor
 var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product()
// 6. Recursion and JavaScript Functions
// 7. Arrow functions