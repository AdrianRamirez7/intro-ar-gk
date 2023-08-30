/*
    SIX PRIMITIVE DATA TYPES
    *Number: whole numbers (positive, negative, or zero) fraction and decimals aka float
    *String: characters in quotation marks
    *Boolean: true or false
    *Undefined: variables not assigned values
    *Null: equal to nothing in the program. not zero or false. Its nothing
    type coercion: concatinationg different data types with each other
    *Symbol: 
*/
console.log(34 + 71);
console.log(123 - 67);
console.log(56 * 23);
console.log(45 / 5);
console.log(5**7);
console.log(33 % 6)
var firstName = "adrian";
console.log(firstName.length)// Or, console.log("Adrian".length);
console.log(firstName.includes("e"));
console.log(firstName.charAt(0));
console.log(firstName.indexOf("a"));
console.log(firstName.toUpperCase());

//Introduction Part Two

//CONSIDER THE VARIABLES:

const theQuestion = "life, the universe, and everything"
const theAnswer = 42;

console.log(theAnswer / 2);//divides evenly
console.log(theAnswer % 3); //21
console.log(theQuestion.length); //34
console.log(theQuestion.length / 2); // 34 / 17
console.log(theQuestion.length + theAnswer);
console.log(theQuestion.indexOf("f"));
console.log(theQuestion + ' ' + theAnswer);
console.log(theQuestion.charAt('0'));
console.log(theQuestion.slice(5, 18));
console.log(theQuestion.slice(23, 34));
//or ;) console.log(theQuestion.slice(theQuestion.lenght - 10));
console.log(theQuestion.charAt(theQuestion.length - 1))
//the above answer can work for the last two questions.
//slice method would work too.

//
var num = 5;
console.log(5 * num);