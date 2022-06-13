// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
const person = {
    firstName: "Moumita",
    lastName: "Chakraborty",
    age: 35,
    profession:"engineer",
    country: "France",
};
for(const prop in person) {
    console.log(`person.${prop} : ${person[prop]}`);
}
    


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:

const getObjectValues = ({
     choice1: "tea",
     choice2: "coffee",
   choice3: "milk"
 });
 function ObjectValues(object) {
     return Object.values(object);
 }

console.log(ObjectValues(getObjectValues));//[ 'tea', 'coffee', 'milk' ]


// * Expected output: 

// ["tea", "coffee", "milk"] 
// ```

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example

 let person1 = {
  firstName: "Michael",
   lastName: "Smith", 
   job: "driver",
   age: 20, 
   city: "Paris",
   printValues: function () {
       console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`);
 
   }
 }
 person1.printValues();//Michael Smith is a 20 year old driver in Paris.

// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".

// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:

const objectToArray = ({
   A: 1,
   B: 2,
   C: 3
 }) ;
 function keyValueArray(object){
 return Object.entries(object)
 };
console.log(keyValueArray(objectToArray));//[ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]


// * Expected output: 

// [["A", 1], ["B", 2], ["C", 3]]



const objectToArray1 =({
   cats: 1,
   dogs: 2, 
   turtles: 4
 }) ;
 function valueArray(object){
     return Object.entries(object)
 }
console.log(valueArray(objectToArray1));
// * Expected output: 
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 


// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example

 let student = {
   name: "Mike", 
   class: "4A" ,
   course: "English",
 }
 function properties(){
     console.log(Object.keys(student));
 }
 properties()
//console.log(Object.keys(student));

// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example

 let first = {firstName: "John"}
 let last = {lastName: "Smith"}
 let merger = {...first, ...last}// rest operater

 function mergeProperties(x,y) {
     return merger
 }

 console.log(merger);
 ////////////////////////////////////
 function mergeProperties(x,y) {
    console.log(Object.assign(first,last));
}
mergeProperties();
// * Expected output:
// {firstName: "John", lastName: "Smith"}



// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 

 let person2 = {
  name: "John", 
   job: "teacher"
 }
 function switchKeys(object) {
     let valuesKeys = Object.entries(object)
     let arrayReverse = []
     for(let i=0;i< valuesKeys.length; i++){
         arrayReverse.push(valuesKeys[i].reverse())
     }
     return Object.fromEntries(arrayReverse)
 }
 console.log(switchKeys(person2));

// * Expected Output: 

// {John: "name", teacher: "job"} 


// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
const programObject ={ a: 1, b: 2, c: 3 };
function ObjectKeyValue(object) {
    const keyArray= Object.keys(object);
    const valueArray1=Object.values(object);
    return [keyArray,valueArray1]
}
console.log(ObjectKeyValue(programObject));

// * Examples:

// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
