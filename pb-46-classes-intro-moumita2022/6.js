/*

Assignment 6

+ Copy the answer from Assignment 5

+ Modify your constructor to
    - receive another property, the "type" of animal
    - set the "type" as a property of the class called "type"

+ Modify the input values so you are passing in also the word "cat"
    - This word should map to the "type" property

+ What happens if you console.log() cat.mood & cat.type?

 */
class Animal {
    constructor(mood,type){
        this.mood = mood;
        this.type = type;
    }
    
}
const cat = new Animal("angry","cat");
const dog = new Animal("happy","dog");
console.log(cat); // Animal { mood: 'angry' , type: 'cat'}
console.log(cat.mood); // angry
console.log(cat.type); // cat

dog.mood= "angry";
console.log(dog); // Animal { mood: 'angry', type: 'dog' }
