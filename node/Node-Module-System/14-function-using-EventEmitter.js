
// const emitter = new EventEmitter();    <-- not often use it. Because not using class will create a lot different object. 

// real world, not often work with EventEmitter Object. But Class.

const EventEmitter = require('events');

// create class of EventEmitter to handle event activity
class Message extends EventEmitter{
    //method of the class
    sayHello(message){
        console.log(message) 
        this.emit('when saying 123', {id:1, age:8}) //use emit create the event & argument 
    }
}

//export the class 
module.exports=Message;