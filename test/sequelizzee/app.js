const express = require('express');
const app = express();
const {Task} = require('./models');

app.get("/",function(req,res) {
    Task.create({
        name:"tony",
        due_date: new Date(),
        UserId: 4
    })
    .then(() =>{
        res.send('success')
    })
    .catch(err=> res.json(err.message))
})


app.listen(3000,() =>console.log(`running on 3000`))
