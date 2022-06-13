// # JS Closures / Scoping exercises

// 1. What’s the result of executing this code and why.
// the output is undefined and 2 because a is undefined at the time of console logging while foo() is a function returning

function test() {
  let a;
  console.log(a); // undefined
  console.log(foo()); // 2 // calling before defining and it works because functions have first priority

  a = 1;
  function foo() {
    return 2;
  }
}

test();
//

// 2. What is the value of result?
// its a variable

let a = 1; // global scope
//const someFunction = (input) => {const  otherFunction = (input)=> a}
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}
const firstResult = someFunction(5);
const result = firstResult(9);
console.log(result); // 5

// 3. What is the result of the following code? Explain your answer.

let fullname = "John Doe";
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname; //"Mou"
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

const tests = obj.prop.getFullname;

console.log(tests()); // undefined // because of this. in line 44

/*  Ans :  
The first console.log returns Aurelio De Rosa. The second one returns undefined
because of missing parenthesis in line 59, and extra parenthesis after test in line 61. */

// 4. What will you see in the console for the following example?

let aA = 1;
function b() {
  aA = 10;
  // console.log(aA) // 10
  return;
  function aA() {}
}
b();
console.log(aA); // 1 ,

// never Name functions same as variables because they can interfere with one another, important message