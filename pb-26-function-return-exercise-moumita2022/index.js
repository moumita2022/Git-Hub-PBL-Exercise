// ### Function Return

// * 1.The following function returns true if the parameter age is greater than 18.
// const allowedAge = (age) => age >=18;
function allowedAge(age) {
  return age > 18;
}

console.log(allowedAge(29));
console.log(allowedAge(18));

//     Otherwise returns false:
function allowedAge(age) {
  if (age > 18) {
    return "true";
  } else {
    return "false";
  }
}
console.log(allowedAge(17));

// * 2.Write a function min(a,b) which returns the least of two numbers a and b.
console.log(Math.min(2, 3, 1));

//     For instance:
//     ```js
//         min(2, 5) == 2
//         min(3, -1) == -1
//         min(1, 1) == 1
//     ```

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(Math.min(2, 5)); //2
console.log(Math.min(3, -1));
-1;
console.log(Math.min(1, 1));
1;

// * 3.Write a function pow(x,n) that returns x in power n. Or, in other words,        multiplies x by itself n times and returns the result.
//     ```js
//     pow(3, 2) = 3 * 3 = 9
//     pow(3, 3) = 3 * 3 * 3 = 27
//     pow(1, 100) = 1 * 1 * ...* 1 = 1
//     ```
function pow(x,y) {
  

}

// function powNum(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(powNum(2, 3)); // 2 to the power 3= 8

// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {}

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  return Math.pow(x,y)
  return x**y
}
