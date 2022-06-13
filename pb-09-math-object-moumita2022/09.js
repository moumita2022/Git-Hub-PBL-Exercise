// # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum

// ### a. Lowest Number

console.log(Math.min(-1,0,1,2,3,4));//-1

// Print out the lowest number between -1 and 4.

// ### b. Highest Number

// Print out the highest number between -1 and 4.
console.log(Math.max(-1,0,1,2,3,4));// 4

// ## 2. Rounding

// ### a. Round up

// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

const round1=3321.32321,round2=326.76,round3=76788.7,round4=-9.78,round5=43.342;

console.log(Math.round(round1));// 3321
console.log(Math.round(round2));// 327
console.log(Math.round(round3));// 76789
console.log(Math.round(round4));// -10
console.log(Math.round(round5));// 43

// ### b. Round down

// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
const ground1=3321.32321,ground2=326.76,ground3=76788.7,ground4=-9.78,ground5=28.329;

console.log(Math.floor(ground1))
console.log(Math.floor(ground2));// 326
console.log(Math.floor(ground3))// 76788
console.log(Math.floor(ground4))
console.log(Math.floor(ground5));// 28

// ## 3. Dice Roll!

// Print a random integer between 1 and 6.
const min=1,max=6;
console.log(Math.floor(Math.random()*(max-min)+min));
