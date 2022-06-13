/*

Assignment 4

+ Create a class called "Animal"

+ Add a constructor
    - Inside the constructor set a property to the class called "mood". Give it the value "angry"

    For example:

    this.mood = "angry";

+ Invoke the class into a new variable, "cat"

+ What happens if you console.log() cat.mood?

 */

class Animal{
    constructor(){
        this.mood= "angry";// mood
    }
}
const cat = new Animal();
const dog = new Animal();
console.log(dog); // Animal { mood: 'angry' }
console.log(cat);
console.log(cat.mood);// angry