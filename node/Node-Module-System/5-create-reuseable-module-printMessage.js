
//create a function --> printMessage

function printMessage(message){
    //send an HTTP request 
    console.log(`you just printed "${message}" by calling printMessage function. imported from 5-create-reuseable-module-printMessage.js `)
}

//export the function outside of the scope.
module.exports= printMessage;

// Just like DVD player. only some button outside(export function), inside can be really complicate ( this file)