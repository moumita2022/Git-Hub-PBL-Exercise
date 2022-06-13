/*

Assignment 7

+ Copy the answer from Assignment 6

+ Create a new method on your class
    - the method will be called "interact"
    - the method will console.log() the
    "mood" (string) property into a sentence like so:

    "It is {mood}."

    Hint: You can use ES6 template literals here

    For a quick recap, see this link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

+ What happens if you run the method cat.interact() ?

 */

class Animal {
    constructor(mood,type){
        this.mood = mood;
        this.type = type;
    }
    interact(){ // method
console.log(`${this.type} is ${this.mood}.`);
    }
    
}

const cat = new Animal("angry","cat");
const dog = new Animal("happy","dog");
console.log(cat); // Animal { mood: 'angry' , type: 'cat'}
console.log(cat.mood); // angry
console.log(cat.type); // cat

cat.interact(); // cat is angry.
dog.interact(); // dog is happy.