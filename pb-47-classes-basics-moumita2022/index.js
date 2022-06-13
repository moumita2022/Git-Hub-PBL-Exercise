// # PB - Classes - Basics

// This task is all about practicing the very basic concepts of classes. Let's practice using the `Date` class that is built into JavaScript!

// Add your answers directly into this file.

const now = new Date();
const test = new Date();
 
 
 

// 1. In the code above, what is the `now` variable?
//Ans: now is a new copy of Date

// 2. What is the type of the `now` variable?
//Ans: Its new object.

// 3. In the code above, what is the `Date`?
//Ans: Date is name of the class.

// 4. What is the type of `Date`?
//Ans: It is a function.

// 5. What do you get when you do `console.log(now)`?
 console.log(now);// 2022-05-31T13:58:57.093Z
// the value of Date: 2022-05-31T13:58:57.093Z

// 6. What do you get when you do `console.log(Date)`?
console.log(Date());// Tue May 31 2022 16:00:11 GMT+0200 (Central European Summer Time)
//Tue May 31 2022 16:00:11 GMT+0200 (Central European Summer Time)

// 7. What do you get when you do `console.log(new Date())`?
console.log(new Date());// 2022-05-31T14:01:50.337Z
// 2022-05-31T14:01:50.337Z: same as `console.log(now)`

// 8. Is `now` truthy?
// Yes

// 9. What do you get when you do `console.log(now === test)`? Why?
console.log(now === test); //false
console.log(now,test); // 2022-06-01T08:32:35.651Z 2022-06-01T08:32:35.651Z
console.log("...............................");
//Ans: Because of different internal data.

// 10. What do you get when you do `console.log(now === Date)`?
console.log(now === Date); //false

// 11. What do you get when you do `console.log(now === new Date())`?
console.log(now === new Date()); // false

// 12. What do you get when you do `console.log(new Date() === new Date())`? Why?
console.log(new Date() === new Date()); // false


console.log("***********************************************************");

/* class Animal{
    constructor(type){
        this.type=type
    }
}
const dog = new Animal("dog");
const dog2= new Animal("dog");
const dog3=dog2;// making a copy of dog2

console.log(dog === dog2); // false
console.log(dog3 === dog2); // true */