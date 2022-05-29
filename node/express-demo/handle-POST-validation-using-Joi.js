
//Input Validation
// For Security Reason, Never trust what client send you.

const express = require('express');
const Joi = require('joi') //import Joi version 13.1.0


app=express();  

//return middleware
app.use(express.json())

// database?
const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

app.post('/api/courses',(req,res)=>{

    // define a schema: shape of the object (example: do we have email? string? min max number character?)

    //Validation
    const schema={
        name:Joi.string().min(3).required()   
    }

    const result = Joi.validate(req.body, schema);
    // console.log(result);

    const course = {
        id:courses.length+1,   
        name:req.body.name,  
    }

    // Check Validation
    if(result.error){
        // res.status(400).send(result.error);
        res.status(400).send(result.error.details[0].message); //show only details of the error 

        return;
    }else if (result){
        //update the array. 
        courses.push(course)
        res.send(course)
    }
})




// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

