
const Joi = require('joi');
const express = require('express');
app=express();  

//pretend data base object
const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];


// get single object element / single ID in the object
app.get('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const

    //step 2: if ID doesn't exist, return 404

    //step 3: if ID exist, return ID
    
});


// get single object element / single ID in the object
app.get('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    
    if (!genre){
        //step 2: if ID doesn't exist, return 404
        return res.status(404).send('The genre with the given ID was not found.');
    }else{
        //step 3: if ID exist, return ID
        return res.send(genre);
    }
  });

  // get single course
  app.get('/api/courses/:id', (req,res)=>{
    // :id is defining variable
    res.send(req.params.id)
  })




  // other API route example: 

  app.get('/', (req,res)=>{
    // hard code
    res.send("hello world");
  })

  app.get('/api/courses',(req,res)=>{
    // hard code
    res.send([1,2,3]); 
  })
  // http://localhost:3000/api/courses


  
// query string parameter. for anything that is optional. 
// provide additional data to backend services
app.get('/api/post/:year/:month', (req,res)=>{
  // look at this path : http://localhost:3000/api/post/2008/10?sortBy=name
  res.send(req.query)
  // query parameter is store in the object with a bunch of key value pair.
})


  
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

