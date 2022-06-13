# PB-refactor-to-class
## Refactor School app 
* Create Class named School

     class School{

     }

* Set schoolStore data in the constructor.
  
  // school data
    schoolStore = [
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


## Use the advanced array methods instated for loop.

* Add Class: Create a method named createClass which takes argument(object) holds class name.

 createClass({ name: "FBW-E10" });



* Add Student: Create a method named createStudent which takes argument(object) holds class ID and the student data.

 createStudent({
  classId: 'class id',
  name: "Alex",
  email: "alex@gmail.com",
  city: "Berlin"
});



 * Delete Class: Create a method named removeClass which takes argument(object) holds class ID and remove class by id.



 removeClass({ classId: 'class id' });



 * Delete Student: Create a method named removeStudent which takes argument(object) holds class id and the student id.



 removeStudent({ classId: 'class id', studentId: 'student id' });



* Edit Student: Create a method named editStudent which takes argument(object) holds class id, the student id and new data values(name/email). We need class id, student id and update data( name, email and city - one or more).



editStudent({
  classId: 'class id',
  studentId: 'student id',
  name: "new name value",
  email: "new email value"
});




* Display And Read School Data: Create a method named renderSchoolTemplate. Format and render school data.

## Final Template 


 School Classes: 
------------------ 
 FbW1 - (class ID: 1): 
  1- Alex, alex@yahoo.com, Berlin - (student ID: 1).
  2- Max, max@yahoo.com, Hamburg - (student ID: 2).
******************************************** 
 FbW2 - (class ID: 2): 
  1- Jon, jon@yahoo.com, Berlin - (student ID: 1).
  2- Pilar, pilar@yahoo.com, Berlin - (student ID: 2).
******************************************** 
 FbW3 - (class ID: 3): 
   The class is empty 
******************************************** 
  Total Classes 3, total students 4


