/* # Strings and Numbers

#### 1. Concatenation. 
* Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number. */

let introSentence = "hello, my name is Fran and I am"; // string
let age = 25;// num
console.log(introSentence + " " + age);

//**Expected Output**: 

// "hello, my name is Fran and I am 25"

// * In this case, what is the `+` operator doing? Comment your answer in the js file.
// the + operater is concatinating the age and introSentence together.

// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
const num = "1005";
console.log(Number(num));// using Number method.

// * Create a variable with the value of "10.05". Convert it to a number.  
const num1= "10.05";
console.log(Number(num1));// using Number method.

