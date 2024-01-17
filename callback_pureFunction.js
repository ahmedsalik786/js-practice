// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function.

//callbackhell:nested callbacks are called callbackhell


function add(a,b){
    return a+b;
}

function print(add,x,y){
    return add(x,y);
}

console.log(add,2,3)



// pure function:A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.



function calculateGST(productPrice) {  // pure function always return the same result 
    return productPrice * 0.05;
}
console.log(calculateGST(15))




let tax = 20;
function calculateGST(productPrice) {   // It is not a pure function as the output is dependent on an external variable “tax”. if tax change give differnt result for same input
    return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))