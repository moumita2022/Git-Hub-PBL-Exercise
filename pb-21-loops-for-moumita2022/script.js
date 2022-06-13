// # Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.**
// Write a program to add up the numbers 1 to 20.
//let sum= 0;for(){}//sum +=i;/ sum = sum + i
for (let i = 1; i <= 20; i++) {
  console.log("number", i);
}

// 2. **There are i bottles of beer on the wall.**
// Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.

for (let i = 1; i <= 5; i++) {
  //console.log("There are", i, "bottle of beer on the wall.");
  console.log(i===1?`There is ${i} bottle of beer on the wall.`:`There are ${i} bottles of beer on the wall.`)
}
// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let x = 2; x <= 20; x += 2) {
  if (x % 2 === 0) {
    console.log(`${x} is even`)
  }else {
    console.log(`${x} is odd`)
  }
}

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let x = 0; x <=10; x++) {
 // console.log(`${x} * 9 = ${x*9}`);

 //Bonus:
 for(let m=1;m<=10; m++){
console.log(`${x} * ${m} = ${x*m}`)
 }
}
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i%5 === 0) {
    console.log(i + "FizzBuzz");
  } else if (i%3 === 0) {
    console.log(i + "Fizz");
  } else if (i%5 === 0) {
    console.log(i + "Buzz");
  }
}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
let total=0;
for(let x= 1 ; x<=1000 ; x++){
    if(x%3 ===0 && x%5 ===0 ){
      total += x
    }
}
console.log(total)//33165


// **Bonus**

// 7. Write programs that produce the following outputs:
// >100 200 300 400 500 600 700 800 900 1000
// for(let i=1; i<=10;i++){
//   console.log(i*100)
// }
let number = 100;
for(let i=1 ; i<=1000/number ; i++){
        console.log(i*number)
    }

// >
// >0 2 4 6 8 10
for(let i = 0; i<=10; i++){
  if(i%2===0){
    console.log(i)
  }
}
// >
// >3 6 9 12 15
for(let i=0; i<=5 ;i+=3){
    console.log(i);//i*3
}
// >
// >9 8 7 6 5 4 3 2 1 0
for(let i=9;i>=0 ;i--){
    console.log(i);
}
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
for(let i = 1 ; i<=4 ; i++){
  //console.log(`${i}`.repeat(3))
  for(let a= 0; a< 3 ; a++){
    console.log(i);
  }
}
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(let i = 0 ; i< 3 ; i++){
  for(let a= 0; a< 5 ; a++){
    console.log(a);
  }
}

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let word = "madam"// "radar"
let reverseWord=""

for(let i=word.length-1 ; i>=0; i--){
  reverseWord += word [i]
}
if(word===reverseWord){
  console.log("This is Palindrome.");
}else{
  console.log("This is not.");
}

// reverse n compare.

