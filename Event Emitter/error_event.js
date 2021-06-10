// Error Event : whenever error is occured error event is executed.This is s special type of event in the nodejs.


const EventEmitter=require('events');
const error_event=new EventEmitter();
error_event.on('error', (err) => {
  console.error('whoops! there was an error');
});
error_event.emit('error',new Error('whoops!'));

