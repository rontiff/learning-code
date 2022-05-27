

// Real live situation 

const EventEmitter=require('events');

var url='http://mylogger.io/log';


// don't work with emitter object, hard to use in real application

// Solution: create a class, with all the capability from EventEmitter. with additional ability

// Logger have all method from EventEmitter
class Logger extends EventEmitter{
    log(message){
        console.log(message);
        //"this" refers to EventEmitter's object
        this.emit('messageLogged', {id:1, url:'http://'});  //rasing a event
    };
}


//export Logger Class 
module.exports=Logger;


