//# Programming Basics: Logical Operators

//These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Make sure that you are using the *correct* logical operator.**

//&& (AND) ||(OR) !(NOT)


//0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.
let isDogBetter= true;
let isCatBetter= false;
//1. Check the result of:

//- a) isDogBetter AND isCatBetter.
console.log(isDogBetter && isCatBetter); //false

//- b) isDogBetter OR isCatBetter.
console.log(isDogBetter || isCatBetter); //true

//- c) NOT (isDogBetter AND isCatBetter).
// console.log(`${!(isDogBetter && isCatBetter)}`);
console.log(!(isDogBetter && isCatBetter) ); // true



//2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.
let atoms= 20;
let sandGrains= 5;
let starsInSky= 10;


//3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.
//console.log(`${(atoms > starsInSky) && (atoms > sandGrains)}`);
console.log(":::::::::::::");
console.log((atoms > starsInSky) && (atoms > sandGrains)); // true

// - b) `atoms` is NOT equal to `sandGrains`.
//console.log(`${atoms !== sandGrains}`);
console.log(atoms !== sandGrains); // true


// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
//console.log(`${(starsInSky < sandGrains) || (starsInSky > atoms)}`);//false


// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.
// console.log(`${(atoms === starsInSky) || (atoms !== sandGrains)}`); //true
console.log((atoms === starsInSky) || (atoms !== sandGrains)); // true

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.
//console.log(`${(atoms >= 10) && (sandGrains <= 10)}`);
console.log((atoms>=10)&& (sandGrains <=10));// true

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.
//console.log(`${(atoms*starsInSky)< 100 || (atoms* sandGrains) > 100 }`); //false
console.log((atoms*starsInSky)< 100 || (atoms* sandGrains) > 100 ); // false

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.


