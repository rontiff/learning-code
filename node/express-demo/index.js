

const express = require('express');

app=express();  //app represent application

// app.get()     //get data
// app.post()    //create data
// app.put()     //update date 
// app.delete()  //delete data


// api route
app.get('/', (req,res)=>{
    res.send("hello world");
})

// api route
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})
// http://localhost:3000/api/courses


/////////////////////////////////////
/////////////////////////////////////


// get single course
app.get('/api/courses/:id', (req,res)=>{
    // :id is defining variable
    res.send(req.params.id)
})


// multiple parameters in the route
//params is essential or required value
app.get('/api/post/:year/:month', (req,res)=>{
    // params object included :year and :month

    // res.send(req.params.year)
    // res.send(req.params.month)

    res.send(req.params)
    //show the params object
})

// query string parameter. for anything that is optional. 
// provide additional data to backend services
app.get('/api/post/:year/:month', (req,res)=>{
    // look at this path : http://localhost:3000/api/post/2008/10?sortBy=name
    res.send(req.query)

    // query parameter is store in the object with a bunch of key value pair.
})




// get single course
app.get('/api/courses/:id', (req,res)=>{
    // :id is defining variable
    res.send(req.params.id)
})












// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

