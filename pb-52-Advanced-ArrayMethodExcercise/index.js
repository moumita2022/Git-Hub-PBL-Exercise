// Practice tasks for advanced array methods:
// Q1Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
 let data = [2.3, 4.2,6,8,1,3,8]
 function milesToKilo(num) {
   return num*1.609344
 }
 let kilometres= data.map(milesToKilo);
 console.log(kilometres);
//let sum=kilometres
//let sum=[3.7014912,6.759244800000001,9.656064,12.874752,1.609344,4.828032,12.874752];
let totalDistanceInKilometers=kilometres.reduce((acc,item)=>{
  return acc+=item;
  //return acc=acc+item;
},0)
console.log(totalDistanceInKilometers);//52.30368

// Q2 Square and sum the array elements using the arrow function and then find the average of the array.
 let nums = [25, 45, 55, 77, 88, 99]
 let squareNums=nums.map(x=>x*x);
 console.log(squareNums); // [ 625, 2025, 3025, 5929, 7744, 9801 ]
 let sumNums = nums.reduce((acc,item)=>{
  return acc+=item;
 },0)
console.log(sumNums); // 389
console.log(sumNums/nums.length); // 64.83333333333333 // finding the average of the array with 6 numbers.




// Q3 Create a new array using the map function whose each element is equal to the original element plus 4.
 let numbers = [4, -4, 10, 203, 53, 11];
 let newFunction = numbers.map(x=>x+4);
 console.log(newFunction); // [ 8, 0, 14, 207, 57, 15 ]


// Q4 Use the .map() method on the heros array to return a new array.
// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.
 const heros = [
   { name: 'Spider-Man' },
   { name: 'Thor' },
   { name: 'Black Panther' },
   { name: 'Captain Marvel' },
   { name: 'Silver Surfer' }
 ];
result=heros.map((item,index) => {
  return {
    id:index,
    hero:item.name
    
  }
},0);

console.log(result);

// EXPECTED OUTPUT (array of objects): 
// [
//   { id: 0, hero: 'Spider-Man' }, 
//   { id: 1, hero: 'Thor' }, 
//   { id: 2, hero: 'Black Panther' }, 
//   { id: 3, hero: 'Captain Marvel' }, 
//   { id: 4, hero: 'Silver Surfer' }
// ]



// Q5 Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.


// An array of odd numbers.
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayOdd =numbers1.filter(item => item% 2!==0);
console.log(arrayOdd); // [ 1, 3, 5, 7, 9 ]


// An array of numbers divisible by 2 or 5.

let arrayDivisible =numbers1.filter(item => item%2 ===0|| item%5 ===0);
console.log(arrayDivisible);// [ 2, 4, 5, 6, 8, 10 ]


// An array of numbers divisible by 3 and then squared those numbers.
let arrayDiviThree =numbers1.filter(item =>(item%3 ===0));
let results=arrayDiviThree.map(item=>item*item);

console.log(arrayDiviThree); // [ 3, 6, 9 ]
console.log(results);// [ 9, 36, 81 ] // squareroot


// The sum of the following: square the numbers divisible by 5.

let arrayDiv =numbers1.filter(item => item%5 ===0);
console.log(arrayDiv);

let result2=arrayDiv.map(item=>item*item);
console.log(result2);// [ 25, 100 ]

 let total= result2.reduce((acc,item)=>{
  return acc+=item;
 },0)
 console.log(total); // 125