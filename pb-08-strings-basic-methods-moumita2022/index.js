// # Programming Basics: Basic String Methods

// ## These exercises are aimed at making you more familiar with string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// **NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const walk= "I can walk in the park all day!"
console.log(walk.slice(18,-9));
/*console.log(walk.substring(18,22));This method can also be used */


// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const hello= "Hello World";
console.log(hello.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const earth= "Hello Earthling";
console.log(earth.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const language= "JavaScript";
console.log(language.slice(3,6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
const shoes = "nice shoes"
console.log("nice shoes".includes("n") || "nice shoes".includes("l"));


// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const fruit ="Bananas";
 console.log(fruit.charAt(0)+ fruit + fruit.charAt(0));

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

const anything = "Scritch";
console.log(anything.slice(-3)+ anything.slice(-3) );

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

const BW = "BoogieWoogie";
console.log(BW.slice(-1)+ BW.slice(1,-1)+ BW.charAt(0) );
// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
const first_name = "Maria";
const live = "Berlin";
const profession= "teacher";
console.log(`My name is ${first_name},I live in ${live}  and I am a ${profession}.`);
// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const fox= "the quick brown fox";
console.log(fox.charAt(0).toUpperCase()+ fox.slice(1));