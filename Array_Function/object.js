// Objects Representation : The way of object repersentation in Nodejs. Object are key-value pair


var coll={
    firstname :"Priti",
    lastname :"Pawar",
    /*address :{
        AT_Post : "Shirsatwadi",
        Taluka : "Indapur",
        Dist :"Pune",
        Pin_code:413114
    }*/
    greet :function(){
        console.log("hello, "+this.firstname +" " + this.lastname);
    }
};
// Different ways of accessing element in the object .1) "." operator 2) [' '] :passed a element name in the array .
//console.log(coll.address);
console.log(coll['firstname']);
console.log(coll.greet());