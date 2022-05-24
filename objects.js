// constructor => new Object()
function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
 }  
 var obj = new Car() 
 obj.go = "go"
 ///////////////////
 var roles = { 
    type: "Admin", // Default value of properties 
    displayType : function() {  
       // Method which will display type of role 
       console.log(this.type); 
    } 
 }  
 // Create new role type called super_role 
 var super_role = Object.create(roles); 
 super_role.displayType(); // Output:Admin  
 console.log(roles)
 ////////////////////////////////////
 // ASSIGN used to copy object
 var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
   console.log(copy[val]) 
}