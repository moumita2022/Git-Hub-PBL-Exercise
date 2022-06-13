// # Programming Basics: Arithmetic Operators

// These exercises are aimed at making you familiar with the arithmetic operators. **Print your results to the console at the end of each step**.

// 0. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings= 9;
let guests=10;

// 1. Add snackServings and guests.
console.log(snackServings+guests); // 19

// 2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log(snackServings-guests);// -1
console.log(guests-snackServings); // 1

// 3. Multiply snackServings and guests.
console.log(snackServings*guests); // 90

// 4. Divide snackServings by guests.
console.log(snackServings/guests);// 0.9

// 5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drink= 10;
let multi=snackServings*guests;
let resultOne=multi/drink;
console.log(resultOne);// 9

// 5. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkey=15;
let banana= 9;
console.log(monkey/banana);// 1.6666666666666667

// 6. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let monkeyfights= 20;
let resultTwo=(monkey+banana)*monkeyfights;
console.log(resultTwo); // 480

// 7. Increment monkeys.
monkey++;

// 8. Decrement bananas.
banana--;

// 9. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness=banana-monkey;
console.log(happiness+monkeyfights); // 12

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
console.log(resultOne%resultTwo); // 9

