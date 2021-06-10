const EventEmitter=require('events');
var util=require('util');

function greetr(){
    this.greeting="Hello !!!";
}

util.inherits(greetr,EventEmitter);

greetr.prototype.greet=function(){
    console.log(this.greeting);
    this.emit('greet1');
}

var gre=new greetr()
gre.on('greet1',function(){
    console.log("someone said !!")
});

gre.greet();