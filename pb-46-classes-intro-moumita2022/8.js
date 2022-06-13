/*

Assignment 8

+ Copy the answer from Assignment 7

+ Modify the interact method to do the following:
    - the interact method should check the type "value" and the "mood"
    value against the "animalBehaviour" object (see below) and return the
    corresponding value

    - Using that information, modify your console.log() with the following
    sentence (remove the old one):

    "It {behaviour} at you."

+ What happens if you run the method cat.interact() ?

+ Create new variables:
    - Invoke the class into a new variable, "dog",
    give it a mood which is either "happy" or "angry"

    - Invoke the class into a new variable, "horse",
    give it a mood which is either "happy" or "angry"

+ What happens if you run the method dog.interact() ?

+ What happens if you run the method horse.interact() ?

 */
const animalBehaviour = {
  dog: {
    angry: "barks",
    happy: "wags its tail",
  },
  cat: {
    angry: "scratches",
    happy: "meows",
  },
  horse: {
    angry: "charges",
    happy: "neighs",
  },
};
class Animal {
  constructor(mood, type) {
    this.mood = mood;
    this.type = type;
  }
  interact() {
    // method
    if (this.type == "dog") {
      if (this.mood == "happy") {
        console.log(`the ${this.type} ${animalBehaviour.dog.happy}`);
      } else {
        console.log(`the ${this.type} ${animalBehaviour.dog.angry}`);
      }
    } else if (this.type == "horse") {
      if (this.mood == "happy") {
        console.log(`the ${this.type} ${animalBehaviour.horse.happy}`);
      } else {
        console.log(`the ${this.type} ${animalBehaviour.horse.angry}`);
      }
    } else {
      if (this.mood == "happy") {
        console.log(`the Cat ${animalBehaviour.cat.happy}`);
      } else {
        console.log(`the Cat ${animalBehaviour.cat.angry}`);
      }
    }
  }
}


const cat = new Animal("angry", "cat");
const dog= new Animal ("happy","dog");
const horse = new Animal("angry","horse")

dog.interact();
horse.interact();
cat.interact();
console.log(cat); // Animal { mood: 'angry' , type: 'cat'}




 
