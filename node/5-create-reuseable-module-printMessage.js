
//lets create a logger

let url="http://mylogger.io/log"

function printMessage(message){
    //send an HTTP request 
    console.log(message)
}

//export the function outside
module.exports= printMessage;

// Just like DVD player. only some button outside(export function), inside can be really complicate ( this file)