//To Access the other js file or any module i.e inbuilt or user defined into current file and get output of that file into the cuurent file. for that purpose "require()"" method is used.

//require('./palindrome.js');

// the variable which are defined in the one file and value of that variable is the function . and get the get the output of the variable in current file .for that purpose see below method.

/*var add=require('./palindrome.js');
console.log(add);*/

// it gives the reference file from the fun.js .
var even_odd=require('./fun.js');
//console.log(even_odd);
even_odd;
