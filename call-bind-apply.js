let name = {
  firstName: "Salik",
  lastName: "ahmed",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

function printFirst(hometown, state) {
  console.log(this.firstName + " " + "lives in " + hometown + "  , " + state);
}
let name2 = {
  firstName: "john",
  lastName: "doe",
};

// function borrowing
name.printName();
name.printName.call(name2);
console.log(name2);

printFirst.call(name, "silchar", "assam");
printFirst.call(name2, "guwahati", "assam");

function sayHello() {
  return "Hello " + this.name;
}

var obj = { name: "Sandy" };

sayHello.call(obj);

// Returns "Hello Sandy"
// call() method allows an object to use the method (function) of another object.

// apply: same as call only difference is it only accept second paramtere as an arraylist
printFirst.apply(name, ["silchar", "assam"]);
printFirst.apply(name2, ["guwahati", "assam"]);

//bind: creates a function that can be called latter
let printmyName = printFirst.bind(name, "guwahati", "assam");
console.log(printmyName);
printmyName();

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet

//What is currying in JavaScript?
//Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(3)(4);

function multiply(a, b) {
  return a * b;
}

function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
