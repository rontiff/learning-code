const express = require('express')
const app = express();


//pretend data base object
const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

  

app.get('/api/genres',(req,res)=>{
    if (!genres){
        return res.status(404).send("object doesn't exist.")
    }else if (genres){
        return res.send(genres)
    }
});

app.get('/api/genres/:id',(req,res)=>{
    const id=genres.find(c=>c.id===parseInt(req.params.id))

    if(!id){
        return res.status(404).send("id doesn't exist.")
    }else if(id){
        return res.send(id)
    }
});

app.delete('/api/genres/:id',(req,res)=>{
    const id =genres.find(c=>c.id===parseInt(req.params.id))

    if (!id){
        return res.status(404).send("delete id doesn't exist.")
    }
    const index=genres.indexOf(id)
    
    genres.splice(index,1)

    res.send(genres);
});