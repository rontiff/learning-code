
// Note: create server should use Express. Cleaner and easier


const http = require('http')


const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.write('Hello World');
        res.end();  //received request, need to end it
    }

    if (req.url ==='/api/courses'){
        res.write(JSON.stringify([1,2,3])) // convert array to string.
        res.end()
    }
    //go to http://localhost:3000/api/courses , should see the array. 

});



// use server's method to select port to listen
server.listen(3000);
console.log('listening on port 3000')