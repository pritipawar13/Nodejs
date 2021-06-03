/*function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}

// Define protype function for Person .
Person.prototype.greet=function(){
    console.log("hello !!,"+this.firstname+" "+this.lastname);
}

var obj1=new Person('priti','pawar');
console.log(obj1.firstname,obj1.lastname);

obj1.greet();

var obj2=new Person('abc','pqr');
obj2.greet();

console.log(obj1.__proto__ == obj2.__proto__);
*/

function number(a,b){
    this.a=a;
    this.b=b;
}

number.prototype.add=function(a,b){
    return a+b;
}
number.prototype.sub=function(a,b){
    return a-b;
}
number.prototype.mult=function(a,b){
    return a*b;
}
number.prototype.divi=function(a,b){
    return a/b;
}
number.prototype.modu=function(a,b){
    return a%b;
}
var obj1=new number(2,3);
var add_no=obj1.add(2,3);
var sub_no=obj1.sub(10,6);
var mult_no=obj1.mult(2,8);
var div_no=obj1.divi(10,2);
var rem_no=obj1.modu(45,7);

console.log("addition : ",add_no);
console.log("Substraaction : ",sub_no);
console.log("Multiplication : ",mult_no);
console.log("Division : ",div_no);
console.log("Remainder: ",rem_no);


// Immediately Invoked the expression : means we can write the defination of a defination after complete the defination we can call that function immediately.
var b=10;
console.log("value of b is ",b);
// immediately invoked function
(function(){
    var a=6;
    if(a>0)
    {
        console.log(a+" is positive");
    }
    else{
        console.log(a+" is negative");
    }
}());
var c=10
console.log("value of b is ",c);
// immediately invoked function.
(function(c){
    if(c!=0)
    {
        console.log("not equal to zero");
    }
    else{
        console.log("equal to zero");
    }

}());

(function(lastname){
    var firstname="Sagar";
    console.log("firstname : ",firstname);
    console.log("lastname : ",lastname);
}("Patil"));


