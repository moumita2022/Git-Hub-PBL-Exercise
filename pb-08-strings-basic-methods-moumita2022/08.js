// # Programming Basics: Basic String Methods

// ## These exercises are aimed at making you more familiar with string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// **NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const text="I can walk in the park all day!";
console.log(text);
console.log(text.indexOf("p")); // 18
console.log(text.slice(18,22)); // park
console.log(text.substring(18,22)); // park

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const text1="Hello World";
console.log(text1.toUpperCase()); // HELLO WORLD

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const text2="Hello Earthling";
console.log(text2.toLowerCase()); // hello earthling

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const text3="JavaScript";
console.log(text3.charAt(3)+text3.charAt(4)+text3.charAt(5));// aSc
console.log(text3.slice(3,6));// aSc
console.log(text3.substring(3,6)); // aSc

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
const text4="nice shoes";
console.log(text4.includes("n"));// true
console.log(text4.includes("l"));// false

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const text5="Bananas";
console.log(text5.charAt(0) + text5 + text5.charAt(0)); // BBananasB
console.log(text5.replace("Bananas","BBananasB")); // BBananasB

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const text6="Scritch";
console.log(text6.slice(4,7)+text6+text6.slice(4,7)); // tchScritchtch
console.log(text6.substring(4)+text6+text6.substring(4)); // tchScritchtch

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
const text7="BoogieWoogie";
const firstCh=text7[0];// B
const lastCh=text7[text7.length-1] // e
//console.log(lastCh);//e
const fullCh=text7.substring(1,text7.length-1)
console.log(lastCh+fullCh+firstCh);// eoogieWoogiB



// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let firstName = "Maria"; 
let city = "Berlin";
let profession="teacher";
console.log(`My name is ${firstName}.I live in ${city} and I am a ${profession}.`);


// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const text8="the quick brown fox";
// const flexCh=text8[0].toUpperCase()

// const fullText= text8.slice(1)
// console.log(flexCh+fullText);//The quick brown fox

console.log(text8[0].toUpperCase()+text8.slice(1)+"."); //The quick brown fox.