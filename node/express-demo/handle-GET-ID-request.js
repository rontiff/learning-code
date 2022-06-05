
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




  
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

