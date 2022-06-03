

// including data in the event response  

const EventEmitter = require("events");
const emitter = new EventEmitter();


//  2 params, (name of event , callback function)
emitter.on('messageLogged', function(arg){   // e or arg = argument , 
    console.log("Listener Called", arg)
})

//arrow function
emitter.on('messageLogged',(arg)=>{  
    console.log("Listener Called", arg)
})


// trigger the event listener 
//add argument in the event
emitter.emit('messageLogged', {id:1, url:'http://', age:30});






