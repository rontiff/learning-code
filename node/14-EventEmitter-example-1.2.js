
// app module

// we can't work with this emitter object
// const emitter = new EventEmitter;


const EventEmitter=require('events');

const Logger = require('./14-EventEmitter-example-1.1');
const logger = new Logger();

//register a listener

logger.on('messageLogged', (arg)=>{
    console.log('listener called', arg);
});

logger.log('message')
