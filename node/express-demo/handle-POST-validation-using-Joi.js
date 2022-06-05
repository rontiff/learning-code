
//Input Validation
// For Security Reason, Never trust what client send you.

const express = require('express');
const Joi = require('joi') //import Joi version 13.1.0
app=express();  

//pretend data base object
const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

//update item in the object
app.post('/api/courses',(req,res)=>{

    //step 1: using Joi set up Validation
    // define a schema: shape of the object (example: do we have email? string? min max number character?)
    const schema={
        name:Joi.string().min(3).required()   
    }
    const result = Joi.validate(req.body, schema);


    //step 2: the object structure of the new item. 
    const course = {
        id:courses.length+1,   
        name:req.body.name,  
    }

    // Check Validation
    //step 3: if didn't pass validation, return error 
    if(result.error){
        //step 2: if didn't pass validation, return error 
        res.status(400).send(result.error.details[0].message); //show only details of the error 
        // aka:  res.status(400).send(result.error);


    }else if (result){

        //step 4: push the new item to the object
        courses.push(course)

        //step 5: return and show the object
        res.send(course)
    }
})




// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

