//# Programming Basics: Arithmetic Operators

//These tasks are aimed at making you more comfortable with solving math problems using JS. **Print each of your results to the console.**

//**Basic Arithmetic Problems**

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
const ticketSold= 6450;
const ticketPrice= 15;
const numberOfticketsSold= ticketSold/ticketPrice;
console.log(numberOfticketsSold); // 430


//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const incomePerweek= 500;
const numberOfweeks= 52;
const incomePerannum= incomePerweek*numberOfweeks;
console.log(incomePerannum);// 26000


//**Percentage**

//Q3. Calculate the percentage of 17/30. Expected output: number%
const percentageCalc= (17*100)/30;
console.log("percentage of 17/30:", percentageCalc); // 56.666666666666664

//**Geometry Formulas** 

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sidesOfsquare= 4.75;
const squarePerimeter= sidesOfsquare + sidesOfsquare + sidesOfsquare + sidesOfsquare; // sidesOfsquare*4
console.log(`perimeter of square: ${squarePerimeter}cm`);// perimeter of square: 19cm


//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const sideA= 5;
const sideB= 6;
const sideC= 7;
const trianglePerimeter= sideA + sideB + sideC;
console.log(`perimeter of triangle: ${trianglePerimeter}cm`);// perimeter of triangle: 18cm

//Q6. Calculate the area of a square. Each side is 5cm.
const areaOfsquare= 5*5;
console.log(`areaOfsquare:${areaOfsquare}cm`); // areaOfsquare:25cm

//Q7. Calculate the area of an [right-angled triangle](https://en.wikipedia.org/wiki/Right_triangle). Assume the length of the sides are 3cm, 4cm, 5cm.
const sideX= 3;
const sideY= 4;
const sideZ= 5;
const triangleSide= sideX*sideY;
const areaOfTriangle=triangleSide/2
console.log(areaOfTriangle); // 6

//Q8. Calculate the volume of a cube. Length of each side is 9cm.
const sideLengthOfCube=9;
const volumnOfCube= sideLengthOfCube**3; // 729
//const volumnOfCube= Math.pow(sideLengthOfCube,3) // 729
console.log(volumnOfCube);


//**Consumer Formula**

//Q9. Calculate the three bills including tips:
//€22.35 + 10% tip
const bill1= 22.35+(22.35*0.1)
console.log(bill1); // 24.585
//const tipAmount=bill1* 0.1
//console.log(tipAmount);// 2.2350000000000003
//€26.67 + 15% tip
const bill2=26.67+(26.67 * 0.15)

//€35.92 + 20% tip
const bill3= 35.92+(35.92* 0.2)
console.log(bill1+bill2+bill3,"€");// 98.3595 €

//**Average** 

//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hours worked per day?
const avgHour=(8+6+5+9+8+2+1+8.5+7+4)/10;
console.log(avgHour); // 5.85

//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
//Expected output: Score in the sixth test: --.
const fiveScore=(75+ 70+ 85+ 90+100);

console.log(fiveScore);// 420
const totalResult=85*6;// 510

console.log(totalResult-fiveScore);// 90

//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.

const avg8Ass= 78*8;
const avg9Ass= 80*9;
console.log(avg9Ass-avg8Ass); // 96

