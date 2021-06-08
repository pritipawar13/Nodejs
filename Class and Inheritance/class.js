'use strict';
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    greet(){
        console.log("Hello "+ this.firstname+' '+this.lastname);
    }
    greet1(){
        return this.age;
    }
}

var per=new Person('Rupesh','jadhav',22);
per.greet();
var age=per.greet1();
console.log("Age of Person is :",age);