// All JavaScript values, except primitives, are objects.
// A primitive value is a value that has no properties or methods.
// examples :
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// object :
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
let person2 = {};
person2.fistName = "Salik";
person2.LastName = "Ahmed";
person2.age = 24;
person2.eyeColor = "black";
console.log(person, person2);
console.log(person["age"]);
console.log(person2.age, person2["eyeColor"]);

const person3 = new Object();
person3.firstName = "sam";
person3.lastName = "begom";
person3.age = 22;
person3.eyeColor = "grey";
console.log("person3", person3);

// create copy of obj
const x = person3;
console.log("x", x);

x.firstName = "samina";
x.phoneNumber = 7636004477771;
console.log(x, person3);
delete person3.phoneNumber;
console.log(person3);
let txt = "";
let key = "";
for (let x in person3) {
  key += x;
  txt += person3[x];
}
console.log("txt", txt, "key", key);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother, myFather);

myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(myFather.name);

//prototypes

let object = {
  name: "salik",
  city: "guwahati",
  getIntro: function () {
    console.log(this.name + " " + this.city);
  },
};

let object2 = {
  name: "sam",
};

object2.__proto__ = object;
console.log(object.getIntro());
console.log(object2.getIntro());

// What is Object Destructuring?
//Object destructuring is a new way to extract elements from an object or an array.

//Object destructuring: Before ES6 version:
const classDetail = {
  strength: 78,
  benches: 39,
  blackBoard: 1,
};

const classStrength1 = classDetail.strength;
const classBenches1 = classDetail.benches;
const classBlackBoard1 = classDetail.blackBoard;

const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard: 1,
};

const {
  strength: classStrength,
  benches: classBenches,
  blackBoard: classBlackBoard,
} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1
