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
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}

/*****************************
 * Truthy and Falsy values and equality operators
 */
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality operators
if (height === "23") {
  console.log("The == operator does type coercion!");
}

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + " points");
} else {
  console.log("There is a draw");
}

if (scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else {
  console.log("There is a draw");
}

// Functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function Retirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName, retirement);
}

Retirement(1990, "John");

/*****************************
 * Function Statements and Expressions
 */
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression and expressions
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives a cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

/*****************************
 * Arrays
 */
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);

//code 3

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

/*****************************
 * Objects and properties
 */
// Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);

/*****************************
 * Objects and methods
 */
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};

john.calcAge();
console.log(john);

//code4
var john = {
  fullName: "John Smith",
  mass: 110,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("They have the same BMI");
}

/*****************************
 * Loops and iteration
 */

// for loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

//code5

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
