const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

//conexão com o banco de dados

mongoose.connect("mongodb+srv://master_user:qwert123@cluster0.jqrjw.mongodb.net/hellapi?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('conexão com o banco de dados estabelecida!');
});


//rotas

const indexRoute = require('./routes/indexRoute');
const customerRoute = require('./routes/CustomerRoute');

app.use(express.json())
app.use('/',indexRoute);
app.use('/customer',customerRoute);

module.exports = app;