let   schoolStore = [
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin"
        },
        {
          name: "Max",
    
          email: "max@yahoo.com",
          city: "Hamburg"
        }
      ]
    },
    
    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin"
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin"
        }
      ]
    },
     {
      name: "FbW3",
      students: []
     }
];
 // Use the advanced array methods instated for loop.   
class School{
    constructor(name,students){
      this.name=name;
      this.students=students;
      this.email=email;
      this.city=city;
    
    }
    
  // Add Class
  createClass() { 


  }
  
  //Add Student
  createStudent() {
   console.log(`classId:${this.id},name:${this.name},email:${this.email},city:${this.city}`);
  }
  //Delete Class
  removeClass() { }
  
  // Delete Student
  removeStudent(classId,studentId) { }
  
  //Edit Student
  editStudent(){ }
  
  // Display And Read School Data
  renderSchoolTemplate(){ }

}

const schoolInit = new School(schoolStore)
console.log("School Classes:");
console.log("------------------");
console.log(schoolInit);
schoolInit.createClass();