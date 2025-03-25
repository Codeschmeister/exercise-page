const http = require('http');
const fs = require('fs');

const express = require('express');
const path = require('path');
const uuid = require('uuid');

const dataProcessing = require('./utility/data-processing.js');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const data = dataProcessing.readRestaurantData();
  res.render('restaurants', {
    numberOfRestaurants: data.length,
    data: data,
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const data = dataProcessing.readRestaurantData();
  data.push(restaurant);
  dataProcessing.writeRestaurantData(data);
  res.redirect('/confirm');
});

app.get('/restaurant/:id', function (req, res) {
  const restaurantId = req.params.id;
  const restaurants = dataProcessing.readRestaurantData();
  for (const restaurant of restaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurant-detail', { restaurant: restaurant });
    }
  }
  res.status(404).render('error404');
});

app.use(function (req, res) {
  res.status(404).render('error404');
});

app.use(function (error, req, res, next) {
  res.status(500).render('error500');
});

app.listen(3000);
