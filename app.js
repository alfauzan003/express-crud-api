const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1:27017/crud-api', {useNewUrlParser:true}).then(() => {
    console.log('Koneksi MongoDB berhasil');
  })
  .catch((err) => {
    console.error('Koneksi MongoDB gagal: ', err);
  });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

module.exports = app;