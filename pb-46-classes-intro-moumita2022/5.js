/*

Assignment 5

+ Create a class called "Animal"

+ Add a constructor
    - Inside the constructor, receive an argument "mood"
    - Add the received argument as a property "mood" into the class Animal

+ Invoke the class into a new variable, "cat", passing in the value "angry"

+ What happens if you console.log() cat.mood?

 */

class Animal {
    constructor(m){ // argument for constructor(m)
        this.mood = m; // property for the class(mood)
    }
}
const cat = new Animal("angry");
const cat2 = new Animal("happy")
console.log(cat); // Animal { mood: 'angry' }
console.log(cat.mood); // angry
console.log(cat2); // Animal { mood: 'happy' }
