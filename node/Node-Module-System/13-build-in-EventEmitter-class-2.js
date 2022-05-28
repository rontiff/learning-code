

// including data in the event response  

const EventEmitter = require("events");
const emitter = new EventEmitter;



emitter.on('messageLogged', function(arg){   // e or arg = argument , 
    console.log("Listener Called", arg)
})

//arrow function
emitter.on('messageLogged',(arg)=>{  
    console.log("Listener Called", arg)
})


// add additional argument of the event
emitter.emit('messageLogged', {id:1, url:'http://'});






