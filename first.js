/*var a=1;
var b=2;
var c=a+b;
var name="Priti Rajendra Pawar"
console.log("name of candidate : ",name);
console.log("sum= ",c);

console.log("print each value in the terminal");
for(var i=0;i<=c;i++)
{
    console.log(i);
}

*/

// different types for function writing in Nodejs.

// Functions statement:

function greet()
{
    console.log("Hii !!! Good Morning");
}

greet();

// First Class Function : we can pass the function as a argument to any function and other argument are int,string ,char etc.
function logGreet(fun)
{
    //fun();
    console.log(fun);

}
logGreet(greet);
//logGreet(3);
//logGreet("iauro System Pvt LTd");
//logGreet(4.5);
//logGreet('SVPM');

// Function Expressions: we can create a function as a value of the variable .

var greetMe= function(){
    console.log("hii good Afternoon");
}

greetMe();
logGreet(greetMe);
// we can write a function defination as a argument of a function .
 /*logGreeting(function(){
    console.log("Helllo !!! ");
});

logGreeting();*/

