let x = 11
let num = (x + 1) * 2 /*Order of operations (unless you override it through parentheses): 
Multiplication (JS prioritizes 1st), Division, Addition, Subtraction (JS prioritizes last)*/

let age = 26
let catYears = (age + 1) / 7


//Challenge time!

let studentScore = 16
let maxScore = 100
let percent = (studentScore / maxScore) * 100
console.log(percent)


/* let sum = 10 + 20
let subtract = 45 -12
let product = 8 * 10
let divide = 66/33 */

let myVar = 87;
myVar = 45;
myVar++ //Quickest way to increment, instead of myVar = 45 + 1

let myVar2 = 11;
myVar2 = 41

myVar2-- //Quickest way to decrement, instead of myVar = 41- 1

/* let product = 2.0 * 2.5;
let quotient = 4.4 / 2.0;
let remainder */
remainder = 11 % 3;


/* let a = 3;
let b = 17;
let c = 12; 

a += 12; /* Most efficient way to add/subtract numbers to a var, instead of = a = a + 12; 
or b = b -9; This is known as augmented addition/subtraction. 
b += 9;
c -= 7; */

let a = 5;
let b = 12;
let c = 33;

a *= 5; /* Most efficient way to multiply/divide numbers to a var, instead of = a = a + 12; 
or b = b -9; This is known as augmented multiplication/division*/
b *= b;
c /= 11;

console.log(a, b, c)
console.log(remainder)