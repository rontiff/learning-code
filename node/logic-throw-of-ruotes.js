
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

///////////////////////////////////////////////////////////////////////////////////
//--GET--//

// get the object
app.get('/api/genres', (req, res) => {

  if (genres){
      //step 1: if object doesn't exist, return 404
      return res.status(404).send('The genre with the given ID was not found.');
  }else{
      //step 2: if object exist, return object
      return res.send(genres);
  }
});

///////////////////////////////////////////////////////////////////////////////////
//--GET--//

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

///////////////////////////////////////////////////////////////////////////////////
//--POST--//

//create new content in the object
app.post('/api/genres', (req, res) => {


  //step 1: using Joi for Validation
  const { error } = validateGenre(req.body); 

  //step 2: if didn't pass validation, return error 
  if (error) return res.status(400).send(error.details[0].message);

  //step 3: the object structure of the new item. 
  const genre = {
      id: genres.length + 1,
      name: req.body.name
  };

  //step 4: push the new item to the object
  genres.push(genre);

  //step 5: return and show the object
  res.send(genre);
});

///////////////////////////////////////////////////////////////////////////////////
//--UPDATE--//

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

///////////////////////////////////////////////////////////////////////////////////
//--DELETE--//

app.delete('/api/genres/:id', (req, res) => {
    
  //step 1: search the ID form the object, and store it at const
  const genre = genres.find(c => c.id === parseInt(req.params.id));

  //step 2: if ID doesn't exist, return 404
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  //step 3: search the item of the object need to delete
  const index = genres.indexOf(genre);

  //step 4: delete the item
  genres.splice(index, 1);

  //step 5: return and show object 
  res.send(genre);
});

///////////////////////////////////////////////////////////////////////////////////
//--Function for validation--//

//npm Joi is for validation checking.(usually for POST & Update)
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}

///////////////////////////////////////////////////////////////////////////////////

// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));