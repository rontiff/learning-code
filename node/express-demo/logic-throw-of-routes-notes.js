
// import npm for backend creating backend

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());



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


// get single object element / single ID in the object
app.get('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const

    //step 2: if ID doesn't exist, return 404

    //step 3: if ID exist, return ID
    
  });


//create new item in the object
app.post('/api/genres', (req, res) => {

    //step 1: using Joi for Validation
    

    //step 2: if didn't pass validation, return error 
    

    //step 3: the content of the new item. 
  

    //step 4: push the new item to the object
    

    //step 5: return and show the object
});


//update item in the object
app.put('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const


    //step 2: if ID doesn't exist, return 404


    //step 3: using Joi for Validation update changes 
    

    //step 4: if didn't pass validation, return error 

    
    //step 5: if pass validation, update the element item


    //step 6: return and show the object

});


app.delete('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const

    //step 2: if ID doesn't exist, return 404

    //step 3: search the item of the object need to delete

    //step 4: delete the item
});



// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));