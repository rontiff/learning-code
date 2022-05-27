


const EventEmitter=require('events')  //import EventEmitter 

const PrintMessage=require('./15-EventEmitter-example-1.1')  //import module function 

const printMessage = new PrintMessage();

printMessage.on('say123',(arg)=>{
    console.log("message called", arg)
});


printMessage.sayHello('hello');

