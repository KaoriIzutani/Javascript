let city = 'Vancouver'
city = 'Beaverton'
let country = 'United States'
let location = city + ', ' + country

console.log(location)

let myFirstName = "Kaori";
let myLastName = "Izutani";
let myFullName = myFirstName + ' ' + myLastName;

// let myStr = '<a href="http://www.example.com" target= "_blank"> Link </a>';
// Because of JS allowing ' [single quotes], you shouldn't have to use literal strings too often.

/* Escape character commands:
\'    single quote
\"    double quote
\\    backslash (needs 2 backslashes)
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed */


// Concatenation review. You can also use augmented addition (+=) to concatenate.

let myStr2 = 'FirstLine\n\t\\SecondLine\nThirdLine';
let ourStr = 'Go first. ' + ' Go second.';
let ourStr2 = 'This comes first. ';
ourStr2 += 'This comes second.'; /* += adds to the var you created. In this example, we are adding
'This comes second' to var ourStr2. */

let myStr3 = 'Berkut & ';
myStr3 += 'Marianne';


console.log(myStr3)
console.log(ourStr2)