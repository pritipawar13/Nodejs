/* Inheritance Concept in NodeJs

  By using the function we can also adopt the functionality of inheritance.we also create a one function and access
  the variable and method in other function i.e we can inherits the properties of the one function to another function.
  by using util package .and in that inherits(Child_Function,Parent_Function) method are used for inheritance .

  Child_Function can access the properties which are defined in the Parent_Function.

*/
var util=require('util');
//Parent_Function 
function Person(){
    this.firstname='Rajendra';
    this.lastname='Yadav';
}
// Function Prototype for Person function .and prototype function name is greet().
Person.prototype.greet=function(){
    console.log("hello Person : "+this.firstname+' '+this.lastname);
}

// Second Function
function Employee(){
    // Access the properties of the parent_function i.e Person() Function.
    Person.call(this);
    this.emp_id="12355";
}

//Function Prototype for Employee function .and prototype function name is greetemp().
Employee.prototype.greetemp=function(){
    console.log("hello Employee : "+this.firstname+' '+this.lastname);
    console.log("age of employee:",this.emp_id);

}
// this are used for the inheritance concept . in that Employee is the child and Person is the parent.
util.inherits(Employee,Person);

// object of the child
var obj=new Employee();
obj.greet();

var obj1=new Employee();
obj1.greetemp();
