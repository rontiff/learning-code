
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

//update item in the object
app.put('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const


    //step 2: if ID doesn't exist, return 404


    //step 3: using Joi for Validation update changes 
    

    //step 4: if didn't pass validation, return error 

    
    //step 5: if pass validation, update the element item


    //step 6: return and show the object

});

app.put('/api/genres/:id', (req, res) => {

  //step 1: search the ID form the object, and store it at const
  const genre = genres.find(c => c.id === parseInt(req.params.id));

  //step 2: if ID doesn't exist, return 404
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  //step 3: using Joi for Validation update changes 
  const { error } = validateGenre(req.body); 

  //step 4: if didn't pass validation, return error 
  if (error) return res.status(400).send(error.details[0].message);
  
  //step 5: if pass validation, update the element item
  genre.name = req.body.name; 

  //step 6: return and show the object
  res.send(genre);
});



// Create validation function using npm Joi 
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}



// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));