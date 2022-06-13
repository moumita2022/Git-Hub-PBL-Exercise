// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Create a function `isWithinRange` that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:


// - `isWithinRange(4, { min: 0, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 4, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 6, max: 10 })` ➞ false
// - `isWithinRange(5, { min: 5, max: 5 })` ➞ true


function isWithinRange(num,range){
    if(num >= range.min && num <= range.max){
        return true
    }else {
        return false
    }
    //return num>=range.min&& num<=range.max
}
//const isWithinRange=(num,range)=> num>= range.min&&num<=range.max
//const isWithinRange=(num{min,max})=> num>= min&&num<=max

console.log(isWithinRange(6,{min:0,max:5}));


// **2. Scrabble.**
// Create a function `calcMaxScrabbleScore`, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:

 const scrabbleHand = [
   { tile: "N", score: 1 },
   { tile: "K", score: 5 },
   { tile: "Z", score: 10 },
   { tile: "X", score: 8 },
   { tile: "D", score: 2 },
   { tile: "A", score: 1 },
   { tile: "E", score: 1 }
 ]
/*
function calcMaxScrabbleScore(arr){
    const sumScore = arr.reduce(function(total,item){
        total += item.score
return total
    } , 0)
    return sumScore
}*/
const calcMaxScrabbleScore=(arr)=>arr.reduce((total,item)=>total+=item.score, 0)
console.log(calcMaxScrabbleScore(scrabbleHand));



// `console.log(calcMaxScrabbleScore(scrabbleHand));` ➞ 28

//     [
//       { tile: "N", score: 1 },
//       { tile: "K", score: 5 },
//       { tile: "Z", score: 10 },
//       { tile: "X", score: 8 },
//       { tile: "D", score: 2 },
//       { tile: "A", score: 1 },
//       { tile: "E", score: 1 }
//     ]

// Here the player's maximum score would be `1 + 5 + 10 + 8 + 2 + 1 + 1` = 28

// **3. Is it an empty object?**
// Create a function `isEmptyObject` that returns true if an object is empty, and false if otherwise.

// Examples:

// - `isEmptyObject({})` ➞ true
// - `isEmptyObject({a: 1})` ➞ false

/*function isEmptyObject(obj){
    let length=Object.entries(obj).length
    if (length === 0){
        return true
    }else{
        return false
    }
}*/
const isEmptyObject=obj => Object.keys(obj).length===0
//const isEmptyObject=obj => !Object.keys(obj).length

console.log(isEmptyObject({}));
// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key value pairs of letters and the number of occurrences for each letter.

// Example:

// - `countLetters("tree")` ➞ {t: 1, r: 1, e: 2}
function countLetters(string){
    let result ={}
    for (const char of string){
        if(string[char]){
            result[char]++;

        }else{
            result[char]=1;
        }
    }
    return result
}

console.log(countLetters("tree"));//{ t: 1, r: 1, e: 1 }


// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - `freeShipping({ "Sponge": 3.50, "Soap": 5.99 })` ➞ false
// - `freeShipping({ "Surround Sound Equipment": 499.99 })` ➞ true
// - `freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })` ➞ false
function freeShipping(obj) {
    let total = 0;
   for( const key in obj){
       total += obj[key]
   }
   return total>=50
}
/* const freeShipping = obj => Object.values(obj).reduce((sum,price)=>sum+=price,0) >=50 */
console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));//false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));//true

// **6. Programming Object.**

 const programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
  difficulty: 8,
   jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
 };



// - Write an instruction that adds the language "Go" to the end of the languages array.
programming.languages.push("Go");

// - Change the difficulty to `7`.
programming.difficulty = 7;
// - Using the delete keyword, write an instruction to remove the jokes key from the programming object.
delete programming.jokes
// - Write an instruction to add a new key called isFun with a value of true to the programming object.
programming["isFun"]= true;
programming.isFun= true;
// - Using a loop, iterate through the languages array and console.log all of the languages.
for(const language of programming.languages){
    console.log(language);
}
/*programming.languages.forEach(function(lang){
    console.log(lang);
});*/

// - Using a loop, console.log all of the keys in the programming object.
for(const key in programming){
    console.log(key);
}
// - Using a loop, console.log all of the values in the programming object.

for(const key in programming){
    console.log(programming[key]);
}
/*for(const value of Object.value(programming)){
    console.log(value);
}*/


// - Add the method `worthwhile` that returns "Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging" if the keys "isChallenging" and "isRewarding" have values of true
// - **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
programming.worthWhile = function() {
    if(this.isChallenging && this.isRewarding){
        console.log("Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging");
    }
}

//programming.worthWhile()
console.log(programming.worthWhile);// returns value

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming)// will lock our Object,we will not be able to add or delete anything after freeze.

programming.isFun = false;
delete programming.languages

console.log(programming);
