// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
/////////////////////////////////////
//spread operator you use ...spread operator with value.
//rest operator you use ...rest operator with variable.
//////////////////////////////////////
/*const euroCountries = ["germany","france","italy","spain"];
const asianCountries = ["india","japan","pakistan","vietnam"];
worldCountries=[...euroCountries , ...asianCountries]
console.log([euroCountries]);
console.log(worldCountries);*/
const mergeObject = [...euroCountries , ...asianCountries];
console.log(mergeObject)


// * Once again create two arrays. Save all elements of both arrays to another variable. 
const fruits= ["apple","mango","banana","grapes"];
const veggies= ["potato","carrot","brinjal","chillies"];
const mergeObject1 = [...fruits , ...veggies];
console.log(mergeObject1);
// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
/*const numbers =[1,2,3,4]
const copyNum = [...numbers]*/
const pet=[...fruits];
console.log(pet);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.

function largestNumber(array) {
console.log(Math.max(...array));//return Math.max(...array)
}
  largestNumber([3,5,8,9]);//console.log(largestNumber([3,5,8,9]))


// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
function smallNumber(small) {
    console.log(Math.min(...small));
}
smallNumber([3,5,8,9]);
// #### 5. Clone and Merge
// Given two objects:
// * 5.1 Clone the person object.

 const person = {name: "John"}
 const job = {role: "Teacher"}
 const mergeObject2 = {...person};
 //const mergeObject2 =Object.assign({},person)

 console.log(mergeObject2);

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

//const employee =Object.assign({},person,job)
const employee={...person , ...job};// spread 
console.log(employee); //{ name: 'John', role: 'Teacher' }

// * 5.3 Then change the values of the properties in the employee object.
person.name = "Moumita";
job.role="Web dev";


// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
function wholeNumber(m,n,o,p){
    /*let average=m+n+o+p/4;
    if(Number.isInteger(average)){
        return true
    }else {
        return false
    }
    console.log(isWhole(...[1,2,3,2]))
    */
    
    let total=m+n+o+p;
    let average=total/arguments.length
    
    console.log(Number.isInteger(average));
}
wholeNumber(1, 2, 3, 4);//false //because they have remainder
wholeNumber(9, 2, 2, 5);//false //because they have remainder

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
const student = {name:"moon",age:23};
const names=["John","Max","Thomas"]
console.log(...names);
//console.log(...student);// cannot call spread in Object with mixed values 