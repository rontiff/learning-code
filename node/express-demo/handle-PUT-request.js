
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



app.put('/api/courses',(req,res)=>{
    // 1. look up the course. If not existing, return 404
    // 2. set validation 
    // 3. response. if !validation, return 404. else return update.


    // Check Course exist or not. If not existing, return 400
    const course = courses.find(c=>c.id === parseInt(req.params.id));

    if(!course){
        res.status(400).send("the course wrong id")
    }

    //Validation, if not validate, return 404
    const schema={
        name:Joi.string().min(3).required()   
    }
    const result = Joi.validate(req.body, schema);

    if (!result){
        res.status(404).send(result.error.details[0].message);
    }

    //update the course
    course.name = req.body.name;
    
    // Response:
    if (result){
        res.send(course);
    }
})


function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()   
    }
    return Joi.validate(course, schema);

}



// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

