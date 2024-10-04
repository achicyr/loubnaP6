const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const booksRoutes = require ('./routes/books')
const userRoutes  = require ('./routes/user')
const path = require('path');

mongoose.connect('mongodb+srv://luobna:loubna-louli@cluster0.bv6g7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use ('/api/books', booksRoutes)
app.use ('/api/auth', userRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;