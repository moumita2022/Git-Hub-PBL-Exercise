// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...arg) => {
    let result= 0;
    for(let i=0;i<arg.length;i++ ){
        result += arg[i]
    }
    return result
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

/*
function printNumbers(a,...b) {// rest store into b except 1 into a .
    console.log(a,b);
}
printNumbers(1,3,4,5,6)*/