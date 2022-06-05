
const Joi = require('joi');
const express = require('express');
app=express();  

//pretend data base object
const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

// get the object
app.get('/api/genres', (req, res) => {

    //step 1: if object doesn't exist, return 404

    //step 2: if object exist, return object

});
        
app.get('/api/genres', (req, res) => {

    if (genres){
        //step 1: if object doesn't exist, return 404
        return res.status(404).send('The genre with the given ID was not found.');
    }else{
        //step 2: if object exist, return object
        return res.send(genres);
    }
});
        


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

