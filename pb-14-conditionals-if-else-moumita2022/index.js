// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
const numberOne = 10;
const numberTwo = 50;

if((numberOne>= 50 && numberOne <= 99) || (numberTwo>= 50 && numberTwo<= 99)){
 console.log(true)
}else{
    console.log(false)
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let numberX = 50;
let numberY = 70;
let numberZ = 90;


if((numberX>= 50 && numberX <=99) || (numberY >= 50 && numberY<= 99) || (numberZ >= 50 && numberZ <= 99)){
    console.log(`This result is:true`)
}else{
    console.log(`This result is:false`)
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let a= 40;//10
let b= 20;
let c = 30;

console.log(Math.max(a,b,c))//40


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const text1="Moumita Chakraborty";
const text2="Py"+ text1;
// use slice method

// if(text2.search("Py")>=0){
//     console.log(text1)
// }else{
//     console.log("Deu ruim")
// }


// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
const d = 40
const e = 42
if(d+e>= 50 && d+e<=80){
    console.log(65)
}else{
    console.log(80)
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
const sum = a+b
const sub = a-b
if(sum === 8 || sub === 8){
    console.log(true)
}else{
    console.log(false)
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 



// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 