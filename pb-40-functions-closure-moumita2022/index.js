// ### Closure

// 1. In your own words, define closure (1-2 sentences).
/* Closure is returning of outer function in another inner function.*/

// 2. Study the following code, then answer the questions below.

function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll(); // its picking random number and returns it so it keeps changing every time.
dansRoll();

zoesRoll();
zoesRoll();

// * a. Where is closure used in this code? How can you tell?
/* in line 12 -- Math.floor and Math.random is used. it is showing anonimous function.

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
/* the number changes everytime we call it.*/

// * c. What is the lexical scope of `newRoll`?

//Ans: It is the inner function and has the axis to global scope.

// 3. Write a function that would allow you to do this using a closure.
function createBase(number) {
  return function (a) {
    //return number + a
    console.log(number + a);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
//  console.log(addSix(10)); // 16
//  console.log(addSix(21)); // 27

//  const addFive = createBase(5)
//  console.log(addFive(10)); returns
