
// const emitter = new EventEmitter();    not often use it

// real world, not often work with EventEmitter Object. But Class.
const EventEmitter=require('events')

// create class of EventEmitter to handle event activity
class PrintMessage extends EventEmitter{
    //method of the class
    sayHello(message){
        console.log(message)
        this.emit('say123', {id:1, age:8});  //argument 
    }
};

module.exports=PrintMessage; //export the class 