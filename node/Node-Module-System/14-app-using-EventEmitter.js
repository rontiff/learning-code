
// app

const EventEmitter = require('events');  //import EventEmitter
const Message =require('./14-function-using-EventEmitter');  //import module
const message = new Message(); // create instance 


// what will response when called
message.on('say123', (arg)=>{
    console.log("method is called, will return the this message and arg",arg)
});


//call the response
// use class call method
message.sayHello('this message print first, and trigger the response.')