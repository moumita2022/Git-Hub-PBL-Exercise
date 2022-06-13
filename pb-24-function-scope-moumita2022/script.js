// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 

/*function validateNumbers(x,y) {
    if( isNaN(x) && is NaN(y)){
        console.log("both numbers are not valid numbers");
    }else if ( isNaN(x) || is NaN(y)){
        console.log("x or y is not valid number")
    }else {
        console.log("both are numbers")
    }
   validateNumbers(23,3)

*/
    function ExpoValue(x,y) {
    if ((typeof x!== "number") || (typeof y!== "number"))  {
        console.log("They are not numbers.");
    }else {
        console.log("They are numbers.");
    }
    let result=1;
    let value="";
    for(let i=0; i< y; i++){
        result *= x;
        value += ` ${result}`
    }
    console.log(value);
}

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
function ExpoNumber(num1,num2){
    let result = ""
    for (let i=1;i<=num2;i++){
       // console.log(num1**i)
        result += `${num1**i}`//`${Math.pow(num1,i)} `
    }
    console.log(result)
}
ExpoValue(3 , 5)
ExpoValue(2 , 8)
ExpoValue(4 , 16)

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 

let favFruit =" Mango";
function printFavoriteFruit() {
 favFruit= "Kiwi";
 console.log("My favorite fruit is",favFruit);//(`My favorite fruit is: ${fruit} `) 

}
printFavoriteFruit()

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 

function ExpoNumber(num1,num2){
    let result = ""
    for (let i=1; i<=num2;i++){
       // console.log(num1**i)
        result += ` ${num1**i} `//`${Math.pow(num1,i)} `
    }
    console.log(result)
}
ExpoNumber(5,10);
/*

function expo(m,n) {
    if((typeof m !=="number")  || (typeof n!== "number"))  {
        console.log("They are not numbers.");
    }else {
        console.log("They are numbers.");
    }
    let result=1;
    let value="";
    for(let i=0; i< n; i++){
        result *= m;
        value += ` ${result}`
    }
    console.log(value); 
}*/

    
//expo(5,10) // 5 25 125 625 3125 15625 78125..
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

//ReferenceError: value is not defined