//Scope in JS determines the accessibility of variables and functions at various parts of one’s code.

//In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot ac

//There are three types of scopes in JS:

//Global Scope
//Local or Function Scope
//Block Scope

//Global Scope: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.

// block Scope
//Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.
// let and const are block scope
// var is global scope
{
  let x = 2;
}
// x cannot use here
// console.log(x) give ReferenceError

//function scope|| local scope
//Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.
// var decleared within a js function is called local scope

function myFunction() {
  let myName = "Salik";
  // can use myName here
}
//cannot use myname here

// Global Scope
// var decleared globallly (outside a js function) have global scope
var name = "sam";
