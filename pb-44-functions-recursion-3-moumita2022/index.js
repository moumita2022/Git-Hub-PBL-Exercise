// # Recursion

// #### Find the nth Fibonacci number
// * Write a JavaScript program to get the first n Fibonacci numbers.

function fibonacci(x) {
    if (x < 2){
        return x ;
    }else {
        return fibonacci(x-1) + fibonacci(x-2);
    }  
}
console.log(fibonacci(8));


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const fib = function(a) {
    if (a ===0) {
        return [0];
    }
    if(a === 1) {
        return[0,1];

    }else{
        // recursion
        const array = fib(a -1);
        array.push(array[array.length -1] + array[array.length - 2]);
        return array;

    }
}

console.log(fib(0)); // [0]
console.log(fib(1)); // [0,1]
console.log(fib(2)); // [0,1,1]
console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13,21]

// * Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// - fibonnaci(0)=> [0]
// - fibonnaci(1)=> [0,1]
// - fibonnaci(2)=> [0,1,1]
// - fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
 

