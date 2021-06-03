// Define the array and print each element i the array.

var arr=[];
arr.push(function(){
    console.log("Hello word");
});

arr.push(function(){
    console.log("Hello word !!");
});

arr.push(function(){
    console.log("Hello word --");
});
arr.push(function(){
    console.log("Hello word **");
});

arr.forEach(function(item){
    item();
});

console.log("--------------------------")
// 2.example : contains combination of all datatype
var array=[];

array.push(2);
array.push('Hello');
array.push(3.4);
array.push(function(){
    //var name="priti";
    console.log("priti");
});

array.forEach(function(item){
    console.log(item);
});