// # General exercises

// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.
function parameter(mia) {
  console.log("mia");
  console.log("mia");
  console.log("mia");
  //return;
}
parameter("Mou");
/*

function threeText(freya){


    return freya.repeat(3);
}
console.log(threeText("random "));*/

// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

function textFiveTimes(word) {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += word; // result= result + word
    //return word.repeat(5);
  }
  return result;
}
console.log(textFiveTimes(" Cat "));

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defines. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

function concatString(num,str) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str; // result= result + word
      //return word.repeat(5);
    }
    return result;
  }
  console.log(concatString(10," Woah "));



/*function woah(xNum, yStr) {
  return yStr.repeat(xNum);
}
console.log(woah(5, " woah "));
console.log(woah(2, " yeah "));

function woah2(xNum, yStr) {
  return xNum.repeat(yStr);
}
console.log(woah2(" mew ", 4));*/

// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

function getmaxNum(array1) {

  /*let largestNum = 0;

  for(let i = 0; i< array1.length; i++){
      if(array1[i]>largestNum){
          largestNum = array1[i]
      }
  }
    return largestNum;*/
  return Math.max(...array1);
}
console.log(getmaxNum([1,6,83,91,0,-4,1337,5])); // 1337

// 5. This question has 2 parts

//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisible by 10. Examples:
//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console


function printIfDivisibleByTen(num) {
    if (num % 10 === 0) {
      console.log("Even 10!");
    } else {
      console.log("no output");
    }
  }
  printIfDivisibleByTen(30);


//     Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

for (let i = 0; i < 125; i++) {
  printIfDivisibleByTen(i);
}
// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
function findMaxNum(num1) {
  return Math.max(...num1);
}
let newArray = [5, 10, 15, 20, 25];
console.log(findMaxNum(newArray));
/*
// Function expression:
const findMaxNum = (a,b,c,d,e) = function (a,b,c,d,e){
    return Math.max(a,b,c,d,e)
}
//Arrow expression:
const findMaxNum = (a,b,c,d,e) => Math.max(a,b,c,d,e)
*/



// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.
const checkDataType = (data) => typeof data === "string" /*{
 if(typeof data === "string"){
     return true
 }
}*/
console.log(checkDataType("nice"));

// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.
/*function checkData(first,second) {
    if (typeof str1 === "string" && typeof str2 ==="string"){
        return true
    }else {
        return false
    }
}*/
//Arrow function:
const checkDataTypeForBoth = (str1 , str2) => typeof str1 === "string" && typeof str2 ==="string";
console.log(checkDataTypeForBoth("hi" ,3));

 

// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

/*function getFirstWord(sentence) {
    const splitedText = sentence.split(" ")
    return splitedText[0];
}*/
//Arrow function:
const getFirstWord= sentence => sentence.split("")[0]

console.log(getFirstWord("Hello World"));



// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"
/*Arrow :
const wordRepeater =( word => word.split(" ").map(item,i,array)=> (item+" ").repeat(array.length))).join("")*/
function wordRepeater(word) {
    const splitedword = word.split(" ")// ["Cat","food"]
    let result=" "
    for(let i=0; i < splitedword.length ;i++) { 
    splitedword[0]
    result +=( splitedword[i] + " ").repeat(splitedword.length)
}
//console.log(result);
return result
}
console.log(wordRepeater("Cat Food"))
console.log(wordRepeater("Oh Dear"))

// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"

const firstLetter = word => word[0] //.chartAt(0)// can use slice method as well
console.log(firstLetter("cat"));
console.log(firstLetter("guythulg"));

// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetters = string => {
    let splitText = string.split(" ")
    let result=" "
    for(let i = 0 ; i<splitText.length ; i++){
    result += splitText[i][0] //.charAt(0)
}
return result
}
console.log(firstLetters("What You See Is What You Get"));



// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

const returnLength = value => {
    /* value[Symbol.iterator] */
    if(typeof value ==="string" || Array.isArray(value)){
        return value.length
    }else {
        return null
    }
}
console.log(returnLength (23));

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]
/* const explode = value => typeof value === "string" ? */
let taskFourTeen = value => {
  if (typeof value == "string") {
      return value.split("")
   /* let b = Array.from(a);
    return b;*/
  } else {
    return null;
  }
};
console.log(taskFourTeen("Hello"));
console.log(taskFourTeen("R & D"));
console.log(taskFourTeen(32));


// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false

const foo = value => value.includes("o")
console.log(foo(""));
console.log(foo("tomato"));

// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"

//const bar = value =>"Cat"+ value.slice(2)
const bar = value => {
    if(value.length>1){
return "Cat"+ value.slice(2)
    }else  {
        return "Cat"
    }
}
console.log(bar(""));
console.log(bar("x"));
console.log(bar("Cat"));
console.log(bar("International Space Station"));