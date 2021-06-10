
// Create event with parameter .we can also create multiple event with same name of event but differnt functionality

const EventEmitter=require('events');
const event=new EventEmitter();

event.on("calculation",(a,b)=>{
    console.log("Addition of two number is : ",(a+b));
})

event.on("calculation",(a,b)=>{
    console.log("Substraction of two number is : ",(a-b));
})

event.on("calculation",(a,b)=>{
    console.log("Multiplication of two number is : ",(a*b));
})

event.on("calculation",(a,b)=>{
    console.log("Division of two number is : ",(a/b));
})

event.on("calculation",(a,b)=>{
    console.log("Remainder of two number is : ",(a%b));
})


event.emit("calculation",2,3)