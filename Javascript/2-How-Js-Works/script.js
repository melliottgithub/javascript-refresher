///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

//function declaration
function calculateAge(year) {
  console.log(2018 - year);
}

//function expression

//retirement(1965)
var retirement = function calculateAge(year) {
  console.log(65 - (2018 - year));
};

//variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

// Example to show the difference between execution stack and scope chain

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + d);
  //console.log(a + b + c + d);
}

//this

console.log(this);

calculateAge(1985);

//function declaration
function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}

var john = {
  name: "John",
  birth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2020 - this.birth);
  },
};

john.calculateAge();
var mike = {
  name: "Mike",
  birth: 1983,
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();
