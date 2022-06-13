// # Recursion

// * Write a function which can reverse string.

// * Write a JavaScript function that reverse a string.

// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh


let string = "Hello World";

function reverseString(str){

const splittedString = str.split("").reverse("").join("");console.log(splittedString);
}
reverseString(string);




// Step 1. Use the split() method to return a new array// // ["h", "e", "l", "l", "o"]
// Step 2. Use the reverse() method to reverse the new created array   // ["o", "l", "l", "e", "h"]
//const reverseArray= splittedString.reverse("")

// Step 3. Use the join() method to join all elements of the array into a string
//const joinArray = reverseArray.join("")  // "olleh"

//return joinArray;
//


reverseString("Hello World"); 


     //const string="hello world"
    // reverse(string)  // return dlrow olleh
