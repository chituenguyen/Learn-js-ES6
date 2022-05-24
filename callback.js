function notifyAll(fnSms, fnEmail) {   
    setTimeout(function() {   
        console.log('starting notification process');   
        fnSms();   
        fnEmail();   
     }, 2000); 
 }
 notifyAll(function() {   
    console.log("Sms send ..");   
 }, 
 function() {   
    console.log("email send ..");   
 });   
 console.log("End of script"); 
 // => multi to scary


 function getSum(n1, n2) {   
    var isAnyNegative = function() {   
       return n1 < 0 || n2 < 0;   
    }   
    var promise = new Promise(function(resolve, reject) {   
       if (isAnyNegative()) {   
          reject(Error("Negatives not supported"));   
       }   
       resolve(n1 + n2)
    });   
    return promise;   
 } 

//  getSum(5, 6)   
// .then(function (result) {   
//    console.log(result);   
// },   
// function (error) {   
//    console.log(error);   
// });
getSum(5, 6)   
.then(function(result) {   
   console.log(result);   
   return getSum(10, 20); 
   // this returns another promise   
},   
function(error) {   
   console.log(error);   
})   
.then(function(result) {   
   console.log(result);   
}, 
function(error) {   
   console.log(error);
}); 

// => multi callback to scary => so using promise to clean way deal with callback