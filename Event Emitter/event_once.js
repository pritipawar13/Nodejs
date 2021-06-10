const EventEmitter=require('events');
const event= new EventEmitter()

// Event is happned every time when event emit.
/*event.on("print",(data)=>{
    console.log(data);
});

event.on("print",(data)=>{
    console.log(data);
});


event.emit("print","This is first time Printing")

event.emit("print","This is second time printin");*/

console.log("----------------------------")
// Event is happned only onces time . event may be emit more than one but happned only onces by using "once()" method.
event.once("print",(data)=>{
    console.log(data);
});

event.once("print",(data)=>{
    console.log(data);
});


event.emit("print","This is first time Printing")

event.emit("print","This is second time printin");