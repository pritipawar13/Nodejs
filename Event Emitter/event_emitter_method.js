const EventEmitter=require('events');
const event=new EventEmitter();
// Build Multiple listener to the one event

// listener 1
var listener1=function(){
    console.log("Listener1 executed...");
}

//listener 2
var listener2=function(){
    console.log(" Listener2 executed ....");
}

// listener 3
var listener3=function(){
    console.log("Listener3 executed....")
}

//bind listener1 to listener event.
event.on('listener',listener1);

////bind listener2 to listener event.
event.on('listener',listener2);

////bind listener3 to listener event.
event.addListener('listener',listener3);


// fire listener event.
event.emit('listener');

// Remove the specific listener from the given event . for that purpose used "removeListener(event_name,listener_name)""
event.removeListener('listener',listener3);
console.log("Listener 3 removed from the event ....")

event.emit('listener')


// count the number of listener in the given events. for that purpose used "listenerCount(emitter,listener_name)"

event.on('count',()=>{});

event.on('count',()=>{
    console.log(".......");
});

event.on('count',()=>{
    console.log("**************");
})

event.emit('count');

console.log("Number of listener in the event is  :",event.listenerCount('count'))


// To get the event name .used function "eventNames()".
event.on('info',(msg)=>{
    console.log(msg);

})

event.emit('info',"Event Emitter Program");
console.log("Name of the event :",event.eventNames())


// To get the all listeners name which is add to the given event.

console.log("Listeners Names in the specific event :",event.listeners('listener'))