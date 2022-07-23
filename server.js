const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

require('dotenv').config();

const PORT = process.env.PORT || 3131
const app = express();

//для парсинга application/json
app.use(express.json());
//для парсинга application/x-www-form
app.use(express.urlencoded({extended:true}))
//путь к папке с картинками
app.use('/static',express.static(__dirname + '/assets'))

app.use('/api/planes', require('./routes/planes'))

mongoose.connect('mongodb://localhost:27017/planes')
.then(()=> {
    app.listen(PORT,()=> {
        console.log(`App listening on port ${PORT}`.bgBrightGreen)
    })
})