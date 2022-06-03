
// app

const EventEmitter = require('events');  //import EventEmitter
const Message =require('./14-function-using-EventEmitter');  //import module
const message = new Message(); // create instance 


// event listener triggered from function sayHello 
message.on('when saying 123', (arg)=>{
    console.log("method is called, will return the this message and arg",arg)
});


// call the function 
// inside the function, there is a event listener 
message.sayHello('this message print first, and trigger the event listener.')