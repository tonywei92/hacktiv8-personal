require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000
const errorHelper = require("./helpers/errorHandling")

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(process.env.DB_URI, {useNewUrlParser:true})
.then(function(success){
    console.log('succesfully connect to database')
})
.catch(function(err){
    console.log(err)
})

app.use('/', require('./routes'));
app.use('/', function(err,req,res,next){
        // console.log(err)
        let errorToSend = errorHelper(err);
        // console.log(errorToSend)
        res.status(errorToSend.statusCode).json(errorToSend);
})

app.listen(PORT, function(){console.log('listen to port ' + PORT)})

