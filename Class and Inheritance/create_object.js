/*We can also create the mutiple object from the given object by using method : Object.create(already_object_name)
and also change the value of the variable which are defined in the already have object.*/



var person={
    firstname:'Priti',
    lastname:'Pawar',
    greet:function(){
        console.log(" Hello welcome to Nodejs "+this.firstname +' '+this.lastname);
    }
}
// first object of the person .
var object1=Object.create(person);
console.log(object1.greet());

// second new object of person and also change the value of the variable which are present in the person.
var object2= Object.create(person);
object2.firstname ="ABC";
object2.lastname="PQR";

console.log(object2.greet());

//third new object of person and also change the value of the variable which are present in the person.

var object3=Object.create(person);
object3.firstname='Prajakta';
object3.lastname="Patil";

console.log(object3.greet())