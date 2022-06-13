// # Extending Classes

// #### 1. Employee Class

// - Create an `Employee` class which accepts:

//   - `id` of the employee as a number
//   - `firstName` of the employee as a string
//   - `lastName` of the employee as as string
//   - `taxId` as a number
//   - `salary` as a number

// - The `Employee` class should have a `generatePaySlip` method which returns:

//        Employee ID: id
//        Name: firstName lastName
//        Tax ID: taxId
//        Pay: monthlySalary --> will need to be calculated based off of salary



// #### 2. Manager Class

// - Create a `Manager` class which extends the `Employee` class

// - The `Manager` class will need the addition of a `managedEmployees` array

// - The `Manager` class will need two methods:
//   - `addManagedEmployee` to add a managed employee to the `managedEmployees` array
//   - `removeManagedEmployee` to remove a managed employee from the `managedEmployees` array



class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip(){
      console.log(`Employee ID: ${this.id},Name:${this.firstName} ${this.lastName},Tax ID:${this.taxId},Pay:${this.salary}`);
  }
}
class Manager extends Employee{
constructor(id, firstName, lastName, taxId, salary){
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
}
addManagedEmployee(emp){
 this.managedEmployees.push(emp) // push
}
removeManagedEmployee(emp){ // filter
this.managedEmployees = this.managedEmployees.filter((item)=>{
 return item.id !== emp.id
}) 
}
}
const emp1= new Employee(2342,"Mou","Das",12432,59837 ) 
console.log(emp1); /*  Employee {
    id: 2342,
    firstName: 'Mou',
    lastName: 'Das',
    taxId: 12432,
    salary: 59837
  } */
emp1.generatePaySlip();// Employee ID: 2342,Name:Mou Das,Tax ID:12432,Pay:59837
const manager= new Manager(4532,"Freya","Das",87535,23978);
const emp2 = new Employee(234,"Mansour","Tum",5000,23333);
console.log(manager);
manager.addManagedEmployee(emp1);
manager.addManagedEmployee(emp2)
console.log(manager);
manager.removeManagedEmployee(emp2);
console.log(manager);



