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