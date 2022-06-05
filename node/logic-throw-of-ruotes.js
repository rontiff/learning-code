
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
    //return the course object
    res.send(genres);
});


// get single object element / single ID in the object
app.get('/api/genres/:id', (req, res) => {
    //search the ID form the object, and store it at const
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    
    if (!genre){
        // if ID doesn't exist, return 404
        return res.status(404).send('The genre with the given ID was not found.');
    }else{
        // if ID exist, return ID
        return res.send(genre);
    }
  });


//create new content in the object
app.post('/api/genres', (req, res) => {

    //Never trust what user post. Always validate what user Post

    // using Joi for Validation
    const { error } = validateGenre(req.body); 

    // if didn't pass validation, return error 
    if (error) return res.status(400).send(error.details[0].message);

    //the content of the new item. 
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    //push the new item to the object
    genres.push(genre);

    //return and show the object
    res.send(genre);
});




app.put('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name; 
  res.send(genre);
});




app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});







//npm Joi is for validation checking.
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}



// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));