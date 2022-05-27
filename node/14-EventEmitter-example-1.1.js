

// Real live situation 






const EventEmitter=require('events');

var url='http://mylogger.io/log';



class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged', {id:1, url:'http://'});  //rasing a event
    };
}

module.exports=Logger;