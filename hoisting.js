//Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

//This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.
// console.log(a); // give reference error
console.log(b);
// console.log(c); // give reference error

let a;
console.log(a);
a = 1;
console.log(a);
var b = 2;
console.log(b);

const c = 3;

//hoisting: during creation phase ,
