// # Programming Basics: Comparison Operators

// These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.

const apples= 20;
const oranges = 30;

// 1. Check whether apples and oranges are equal.
console.log(apples === oranges); // false

// 2. Check whether apples and oranges are *not* equal.
console.log(apples !== oranges); // true


// 3. Check whether apples is greater than oranges.
console.log(apples > oranges);// false

// 4. Check whether apples is less than or equal to oranges.
console.log(apples <= oranges); // true

// 5. Check whether oranges is greater than apples.
console.log(oranges > apples);// true

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added 
const  mangoes=5;
console.log((mangoes*apples) > (mangoes+apples));// 100>25// true

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
console.log((apples-mangoes)<(oranges/mangoes));// false

// 8. Check whether mangoes, apples and oranges are equal.
console.log(apples === oranges === mangoes); // false

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
console.log((apples % mangoes)===(oranges % mangoes));// true


// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.
console.log((mangoes+apples)> (oranges-mangoes));// false
console.log((mangoes+apples)>= (oranges-mangoes)); // true

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
