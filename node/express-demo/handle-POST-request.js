

const express = require('express');

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

    const course = {
        id:courses.length+1,   //assign new id, so find current id +1
        name:req.body.name,    //based on user input
    }
    //update the array. 
    courses.push(course)
    res.send(course)
})
//use postman to test 

// step1: open postman, select post method
// step2: sleect body , raw , JSON(application/json)
// step3: create a demo data post. and check result



//Input Validation
// For Security Reason, Never trust what client send you.









// environment variable = PORT 
// global object "process"

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

