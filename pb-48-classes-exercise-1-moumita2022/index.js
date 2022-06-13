class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname= firstname +" "+ lastname // using properties
		this.email= `${firstname}.${lastname}@company.com`.toLowerCase()
		
		// Complete the code!
	} // Using method
	/* fullname(){
		return this.firstname + " " + this.lastname;
	}
	email(){
		return this.firstname + "." + this.lastname + "@company.com";
	} */
}


const emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); // John Smith

const emp2 = new Employee("Mary","Sue");
//const caseChange = emp2.toLowerCase()
console.log(emp2.email); // mary.sue@company.com

const emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstname);// Antony


/* ### JS Classes

Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:

Form the `fullname` by simply joining the first and last name together, separated by a space.
Form the `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.
Examples


emp1 = new Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = new Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
emp3.firstname ➞ "Antony"


* Note :- The properties firstname and lastname are already made for you.
 */