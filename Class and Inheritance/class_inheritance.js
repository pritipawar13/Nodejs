/* Inheritance conept is achive by using class . "extends " keyword is used for inheritance means the access the 
properties of parent class and into child class.

*/

'use strict';
var util=require('util');
// first class

class Person{
    constructor(){
        this.name='Priti';
        this.address='Pawar';
    }

    info(){
        console.log("Name of Person : "+this.name);
        console.log("Address of person : "+this.address);
    }
    
}
// Company class inherites the Person Class . Company is a child class and Person is a parent class
class Company extends Person{
    constructor(name_company,add_company){
        // super keyword is used for access the functionality of parent class
        super();
        this.name_company=name_company;
        this.add_company=add_company;
    }
    // method of Company class
    info_company(){
        console.log("\nInformation about Company")
        console.log("Name of Company : "+this.name_company);
        console.log("Address of Company: "+this.add_company);

        console.log("\nInformation about Person")
        // access the info() method which are defined in the parent class.
        super.info()
        //console.log("Name of Person : "+this.name);
        //console.log("Address of person : "+this.address);
    }
}

// created object of child class.
var obj1=new Company('iauro','Pune');
obj1.info_company();

var obj2=new Company('Shotimize','Pune');
obj2.info_company();