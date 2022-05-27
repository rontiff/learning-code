
// app module

// don't work with emitter object, hard to use in real application

const EventEmitter=require('events');

const emitter = new EventEmitter;



const Logger = require('./14-EventEmitter-example-1.1');
const logger = new Logger();

//register a listener

logger.on('messageLogged', (arg)=>{
    console.log('listener called', arg);
});

logger.log('message')
