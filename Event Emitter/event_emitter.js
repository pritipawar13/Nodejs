
// Create a simple and multiple events by using event module .

const EventEmitter=require('events');
const event=new EventEmitter();


event.on("Myname",()=>{
    console.log('My name is Priti')
})
event.emit("Myname")



//Subscribe FirstEvent
event.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent
event.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
event.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// Raising SecondEvent
event.emit('SecondEvent', 'This is my second Node.js event emitter example.');





