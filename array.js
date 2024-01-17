//arrays
 
let cars=["hondai","alto","neno","swift,","thar"]
let bikes=[];
bikes[0]="pluser"
bikes[1]="hunter"
bikes[2]='discover'
bikes[3]='ktm'
bikes[4]='bullet'
bikes[5]='himalyan'

let names=new Array("Salik","Samina","Nagu","Kaliya");
console.log(cars,bikes,names);

//inserting new element at end
bikes.push("BMW")
console.log("after adding at end",bikes)

//inserting new element at 0
names.unshift("juraid")
console.log("after inserting at 0index",names)
//deleting last element
names.pop();
console.log("after deleting last element",names)

//remove first element
bikes.shift()
console.log("after deleting first element",bikes)

// delete names[0];
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Concatenating
let concatArray1=bikes.concat(cars)
console.log(concatArray1)
let concatArray2=bikes.concat(cars,names)
console.log(concatArray2)

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
fruits.splice(0, 1);
console.log(fruits)


// The slice() method slices out a piece of an array.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const slice1=fruits.slice(2)//create a new slice from index 2
console.log(slice1)
const slice2=fruits.splice(2,4)
console.log(slice2)//create a new slice from index 2 to 4(do not include index 4)