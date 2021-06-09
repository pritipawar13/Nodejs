/*function greet(callback){
    console.log("Hello");
    callback();
}
greet(function(){
    console.log("Callback is invoked");
});

greet(function(){
    console.log("A different callback is invoked !!!!");
});*/


function info(callback1){
    console.log("Hello !!!");
    var data ={
        name :'ABC',
        surname:"PQR"
    }
    callback1(data);
}

info(function(data){
console.log("The callback is invoked ..");
console.log(data);
});

info(function(data){
    console.log("The callback is invoked ..");
    console.log("Name of Person :",data.name);
    console.log("Surname of Person :",data.surname);
    });
