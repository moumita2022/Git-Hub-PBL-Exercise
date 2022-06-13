//# On the block

// #### 1. Updater
// * Create a new variable and call it `determiner`

// * Give `determiner` a random value between -100 and 100 (change it to experiment)

// * Create a 2nd variable called `x`

// * Depending on the value of `determiner`, assign a value to `x`. 
//     - If `determiner` is less than 0, `x`'s value should be "Less than 0"
//     - If `determiner` is greater or equal 0, `x`'s value should "Greater or equal to 0".
let determiner = -100 // range between -100 to 100
let x= (determiner >=0)? "Greater or equal to 0": "Less than 0";
console.log(x) // Less than 0

// #### 2. New Variables 
// * Create a new variable called `updater`
// * Depending on the value of `determiner`
//     * If determiner is greater of equal to 0
//         * set `updater` to "Greater or equal to 0"
//         * create another variable called `message`
//         * assign a value of "Positive Integer" to `message`
//         * print out `message`. 
//     * If determiner is less than 0, assign `updater`' the value "Less than 0".
// * Print out the value of `updater`

// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
let updater;
if(determiner>=0){
    updater ="Greater or equal to 0"
    let message = "Positive Integer" // BLock scope -anything between the curly braces
 console.log(message)// cannot be printed as it is inside
}else {
    updater= "Less than 0"
}
//
console.log(updater);  // Global scope - it is for the whole file to be use


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.
const age = 18
const allowed = age>= 18 ? true : false ;

console.log(allowed);//true
