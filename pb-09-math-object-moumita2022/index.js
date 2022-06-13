// # Math

// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum


// ### a. Lowest Number

// Print out the lowest number between -1 and 4.
console.log(Math.min(-1,0,1,2,3,4));
/*console.log(`the lowest number between -1 and 4 is)*/
// ### b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1,0,1,2,3,4));

// ## 2. Rounding
// ### a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
/*let a=3321.32321;
let b=326.76;
let c=76788.7;
let d=-9.78;
let e =43.342;
console.log(Math.round(a));
console.log(Math.round(b));
console.log(Math.round(c));
console.log(Math.round(d));
console.log(Math.round(e));*/
console.log(`the nearest integer:${Math.ceil(3321.32321)}`);
console.log(`the nearest integer:${Math.ceil(326.76)}`);
console.log(`the nearest integer:${Math.ceil(76788.7)}`);
console.log(`the nearest integer:${Math.ceil(-9.78)}`);
console.log(`the nearest integer:${Math.ceil(43.342)}`);

// ### b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
/*let i=3321.32321;
let j=326.76;
let k=76788.7;
let l=-9.78;
let m =28.329;
console.log(Math.floor(i));
console.log(Math.floor(j));
console.log(Math.floor(k));
console.log(Math.floor(l));
console.log(Math.floor(m));*/

console.log(`the nearest integer:${Math.floor(3321.32321)}`);
console.log(`the nearest integer:${Math.floor(76788.7)}`);
console.log(`the nearest integer:${Math.floor(326.76)}`);
console.log(`the nearest integer:${Math.floor(-9.78)}`);
console.log(`the nearest integer:${Math.floor(28.329)}`);

// ## 3. Dice Roll!

// Print a random integer between 1 and 6.
let max = 6, min = 1;
console.log(`Dice Roll: Random Integer`, Math.round(Math.random() * (max - min) + min)); 
//console.log(Math.ceil(Math.random()*6) // 0.01-5.99 // 1-6