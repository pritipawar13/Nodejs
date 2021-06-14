/*setTimeout(function(){
    console.log("Timmer");
},6000);

function x(y){
    console.log("y")
    y()
    console.log("XXy")
}

x(function(){
    console.log("x");
})

*/

// Callback Functions in the Nodejs 
/*
var data;
function fetchData(cb){
    setTimeout(function(){
        data={'pcode':'1011','course': 'Nodejs'};
        cb()
    },2000)
    //cb()
}
console.log("Start here")
fetchData(function(){
    console.log(data)
    console.log("end here")
});
*/
/*

function square(n,cb){
    setTimeout(()=>{
        cb(n*n);
    },2000);
}

function addition(a,b,cb){
    setTimeout(()=>{
        cb(a+b);
    },1000)
}

function Multiplication(a,b,callback){
    setTimeout(()=>{
        callback(a*b);
    },4000)
}

function Division(a,b,callback){
    setTimeout(()=>{
        callback(a/b);
    })
}

console.log("Calculation :")
function remainder(a,b){
    console.log("Remainder of two number",a%b)
}

remainder(4,2)

Division(20,4,function(res){
    console.log("Division of two Number :",res)
})

Multiplication(4,5,function(res){
    console.log("Multiplication of two number :",res)
})

square(3,function(res){
    console.log("Result of square :",res);
})

addition(2,5,function(res){
    console.log("Addition of two number :",res)
})*/


// Read the file by using callback function

fs=require('fs');
function read_file(filename,callback){
    setTimeout(()=>{
        data=fs.readFile(filename,'utf8',(err,data)=>{
        if(err){
            throw err;
        }
        else{
            callback(data);
        }
    })
},3000)
}

read_file('/home/priti/Nodejs/OOPS/info.txt',function(data){
    console.log(data)
})