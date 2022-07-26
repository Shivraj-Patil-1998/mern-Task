const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const db = express();
// console.log(process.env.Mongo_url)
const DB = process.env.Mongo_url
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})


module.exports = db;