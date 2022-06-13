// # Scope

// **Instructions**
// 1. Create the following object:
// ```javascript
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
  student1Print: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a student in class ${this.class}.`
    ); // or use ${student.firstName}
  },
};

student.student1Print();
// ```
// * Create a method that prints the following:
// ```javascript
// "John smith is a student in class 12"
// ```

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
  firstName: "Moumita",
  lastName: "Chakraborty",
  age: 35,
  profession:"engineer",
  country: "France",
  personData(){
      console.log(`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.profession} living in ${person.country}.`
      );
  }
};
person.personData()


// ## Bonus

// 3. Write a method to get the length of the person object.
 let lengthOfPersonData= Object.keys(person).length;

 console.log(lengthOfPersonData);// 6