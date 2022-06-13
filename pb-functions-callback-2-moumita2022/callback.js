// # Callbacks

// #### Number Square
// * Write a function which will return square of given number
// * Write a function which will return square of every number in array

let num = 9;
function square(a) {
    return a*a;
}
function result(number) {
    console.log(number);
}

result(square(num));



//     const array = [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map(x => Math.pow(x,2)));// 2 means square of x .



//     square(array,squareNumber)  // return [1,4,9,16,25]