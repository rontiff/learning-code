
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



//Never trust what user post. Always validate what user Post
//create new item in the object
app.post('/api/genres', (req, res) => {

    //step 1: using Joi set up Validation
    

    //step 2: if didn't pass validation, return error 
    

    //step 3: the object structure of the new item. 


    //step 4: push the new item to the object
    

    //step 5: return and show the object
});


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


//npm Joi is for validation checking set up. 
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}


// Create port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));