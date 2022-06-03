

const express = require('express');

app=express();  


// database?
const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];


// api route
app.get('/api/courses',(req,res)=>{
    res.send(courses);
})
// http://localhost:3000/api/courses



// get single course from server
app.get('/api/courses/:id', (req,res)=>{

    const course = courses.find(c=>c.id === parseInt(req.params.id));

    // Array.find is javascript method
    //what is C?
    //req.params.id will return string. so need to parseInt the value.

    
    if (!course){
        // if false:
        res.status(404).send('The course with the given ID was not found');
    }else if (course){
        //if true:
        res.send(course);
    }
}) 
 
 





// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

