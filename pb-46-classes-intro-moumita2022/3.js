/*

Assignment 3

+ Create a class called "Animal"

+ Add a constructor
    - Inside the constructor write a console.log() statement
    with some text of your choice

+ Invoke the class into a new variable, "cat"

+ What do you see when you run the program?

 */

class Animal{
    constructor(){
        console.log("make some noise...");
    }
}
const cat = new Animal(); // make some noise...
console.log(cat);