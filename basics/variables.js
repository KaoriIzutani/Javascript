/* Variable rules: 1)  Can't define a var more than once. The workaround to reassign a var value is 
in the below example.*/

/* let petName = 'Aslan'
petName = 'Marmalade'

console.log(petName) */

// 2) There are rules regarding var name. Example: 
let test = 2
let result = 3 + 4 
/*Confusing because JS doesn't know if you want the 3 as a var (which = 2) or you want to add 3 + 4
together. One of the rules is the var must start with a letter, underscore, or $. Other than $, all 
other symbols, such as ! are not acceptable to use in var names.*/ 

// 3) Variables cannot be reserved keywords, such as var, let etc

/* Data types: undefined (not defined), null (you set the var to be something, but the result is nothing),
strings & numbers (self-explanatory), boolean (true/false) symbol (immutable, primitive value that is unique.
 More on this later), number, object (stores key value pairs. More on this later) Source: freecodecamp.org*/

 var myName = 'KowKow' /* For a while, this was the only way to declare var. "var" can be used throughout
 your entire program*/
 myName = 'Beansprout'
 let ourName = 'freeCodeCamp' /*let var can only be used within the scope of where you declared the let var*/
 const pi = 3.14 
 //const is a var that can never change it. If you try to change it, you get an error*/
 /* var a;
 let b = 2;
console.log(a)

 a = 7;
console.log(a)
 b = a  */ //This says you're assigning the contents of b to a.

/*  var a = 5;
 var b = 10;
 var c = "I am a ";

 //Don't change lines 42-44!

a = a + 1;
b = b + 5;
c = c + "string!";
console.log(a, b, c) */

// Declarations are case sensitive
var capVar; 
var properCamelCase;
var TitleCaseOver;

// Assignments
capVar = 10;
properCamelCase = "It's over";
titleCaseOver = 9000;

console.log(capVar, properCamelCase, titleCaseOver)