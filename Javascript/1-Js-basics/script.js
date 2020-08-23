/*
console.log("Hello World!!!");

var firstName = "John";
var lastName = "Smith";

console.log(firstName, lastName);

var fullAge = true;

console.log(fullAge);

var job;

job = "Teacher";

console.log(job);

// variables rules below do not work
var 3years = 3;
var johnMark = 'John and Mark'
var if = 3;
*/

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

/*****************************BAsic operators *************/
var year = 2018;
var yearJohn = year - 28;
var yearMark = year - 23;

console.log(yearJohn);
console.log(yearMark);

console.log(typeof yearJohn);

/***************************** Ternary operator and switch *************/

var fN = "John";

var age = 18;

age >= 18
  ? console.log(fN + " drinks beer.")
  : console.log(fN + " drinks juice.");

  switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

/*****************************
* Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}