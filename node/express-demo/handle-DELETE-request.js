
// import npm for backend creating backend

const Joi = require('joi');
const express = require('express');
const app = express();

//pretend data base object
const genres = [
  { id: 1, name: 'Action' },  
  { id: 2, name: 'Horror' },  
  { id: 3, name: 'Romance' },  
];


app.delete('/api/genres/:id', (req, res) => {

    //step 1: search the ID form the object, and store it at const

    //step 2: if ID doesn't exist, return 404

    //step 3: search the item of the object need to delete

    //step 4: delete the item
});


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





// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));