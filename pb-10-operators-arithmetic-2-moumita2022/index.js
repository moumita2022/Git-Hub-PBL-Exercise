// # Programming Basics: Arithmetic Operators

// These exercises are aimed at making you familiar with the arithmetic operators. **Print your results to the console at the end of each step**.

// 0. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings=10;
let guests= 5;

// 1. Add snackServings and guests.
console.log(snackServings+guests);

// 2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log(snackServings-guests);
// 3. Multiply snackServings and guests.
console.log(snackServings*guests);

// 4. Divide snackServings by guests.
console.log(snackServings / guests);

// 5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks=10;
let multiplySnackServingGuests= snackServings*guests;
let resultOne=multiplySnackServingGuests/drinks;
//const resultOne = ( snackServings*guests)/ drinks;
console.log(resultOne );


// 5. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys=15;
let bananas=9;
console.log(monkeys/bananas);

// 6. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let monkeyfights=20;
let addMonkeyBananas=monkeys+bananas;
let resultTwo=addMonkeyBananas*monkeyfights;
console.log(resultTwo);

// 7. Increment monkeys.
monkeys++

// 8. Decrement bananas.
bananas--
// 9. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness=bananas-monkeys;
console.log(happiness+monkeyfights);

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log(resultOne%resultTwo);

