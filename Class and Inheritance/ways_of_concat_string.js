// different ways to concat the string in the Nodejs .i.e template literal .

var firstname='Priti';
var lastname="Pawar";
var middlename="Rajendra";

// First way to concat mutiple string into one string.
console.log("Full Name : "+firstname+' '+middlename+' '+lastname);

//// second way to concat mutiple string into one string.
console.log("Full Name : "+`${firstname}` +' '+`${middlename}`+' '+`${lastname}`);