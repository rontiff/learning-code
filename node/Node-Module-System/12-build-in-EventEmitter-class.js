
// Event is a signal that indicate that something has happened in the application.
// how to request and response Event

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// import EventEmitter
const EventEmitter = require("events");// EventEmitter is a class. Capital Letter. including a lot of methods

// create instance of the class:  (aka create object using Class) 
const emitter = new EventEmitter;



//register a listener ( method "on" and method "addListener" are the same.)

// 2 param
//emitter.on (nameOfEvnet , callBackFunction )

emitter.on('messageLogged', function(){
    console.log("Listener Called")
})
// alternative
emitter.addListener('messageLogged', function(){
    console.log("Listener Called Again")
})

//raise an event
emitter.emit('messageLogged') //trigger an event happen 


// the order is important, if raise the event before the listener, it won't return. 




