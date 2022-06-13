// # Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. **You may need to look up some methods to complete these tasks.** Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondItem=euroCities[1];

// 2. Change the first item in the array to "Berlin".
euroCities[0]="Berlin";
console.log(euroCities);//5

// 3. Print the length of the array "euroCities".
console.log(euroCities.length);
// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest") ;


// 6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities.splice(1,2)
console.log(euroCities);


// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities= ["Malaysia","Jakarta","Bali","Delhi","Calcutta"];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
const asianCity= asianCities.slice(1,4);
console.log(asianCity);//'Jakarta', 'Bali', 'Delhi'

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
const worldCities= euroCities.concat(asianCities);// we are getting a big array.
console.log(worldCities);


// 10. Reverse the order of worldCities.
// worldCities.reverse()
console.log(worldCities.reverse());

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities.splice(2,1,"Toronto");
console.log(worldCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1,0,"Washington");
console.log(worldCities);

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 
console.log(worldCities.join( " , "));
console.log(worldCities.join( "+"));


// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 
 const bonus= "Hello World";
 const reverseBonus= bonus.split("").reverse().join("");
 console.log(reverseBonus); //dlroW olleH
 //console.log("Hello World".split("").reverse().join(""));


// **Extra Practice**

// Print the results to the console.
console.log(reverseBonus); //dlroW olleH

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const movies=["Titanic","BadGuys","ForestGump","FrenchKiss","Alive"];
// 2. Make an array of your parents' names.
const parentName=["Santi", "Baran"];

// 3. Combine these two arrays.
const parentMovies= parentName.concat(movies);
console.table(parentMovies);
/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │   'Santi'    │
│    1    │   'Baran'    │
│    2    │  'Titanic'   │
│    3    │  'BadGuys'   │
│    4    │ 'ForestGump' │
│    5    │ 'FrenchKiss' │
│    6    │   'Alive'    │
└─────────┴──────────────┘

*/

// 4. Add your pets' names.
parentMovies.push("Bonzo","Fonsie");
console.table(parentMovies);
/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │   'Santi'    │
│    1    │   'Baran'    │
│    2    │  'Titanic'   │
│    3    │  'BadGuys'   │
│    4    │ 'ForestGump' │
│    5    │ 'FrenchKiss' │
│    6    │   'Alive'    │
│    7    │   'Bonzo'    │
│    8    │   'Fonsie'   │
└─────────┴──────────────┘
*/
// 5. Reverse the order of the array.
parentMovies.reverse();
console.table(parentMovies);
/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │   'Fonsie'   │
│    1    │   'Bonzo'    │
│    2    │   'Alive'    │
│    3    │ 'FrenchKiss' │
│    4    │ 'ForestGump' │
│    5    │  'BadGuys'   │
│    6    │  'Titanic'   │
│    7    │   'Baran'    │
│    8    │   'Santi'    │
└─────────┴──────────────┘
*/

// 6. Access one of your parents' names.
const mother= parentName[1];
console.log(mother);//Baran

// 7. Update the name of one of your parents. 
parentName[1]="Maa";
console.log(parentName);
