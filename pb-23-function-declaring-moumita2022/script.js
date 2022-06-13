// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.
function productTwoNumber(num1,num2) {
    console.log(num1*num2)
}
productTwoNumber(9 ,10) //90
productTwoNumber(12,10) // 120


// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.
let multiplicationNumber = function (num1,num2){
    console.log(num1*num2);
}
multiplicationNumber(15,20) // 300


// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

 let productOfNumber = (num1,num2) =>{ 
console.log(num1*num2);// 35
 }
 productOfNumber(5,7)
// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
 function divisionTwoNumbers(x,y) {
    console.log(x%y) 
 }
 const divisionTwoNumbers= (x,y)=>console.log(y%x)// Arrow method

 divisionTwoNumbers(100,21)// remainder is 16
