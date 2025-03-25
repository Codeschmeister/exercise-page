const http = require('http');
const fs = require('fs');

const express = require('express');
const path = require('path');
const uuid = require('uuid');
const { dir } = require('console');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'restaurant.json'))
  );
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
  const file = fs.readFileSync(path.join(__dirname, 'data', 'restaurant.json'));
  const fileData = JSON.parse(file);
  fileData.push(restaurant);
  fs.writeFileSync(
    path.join(__dirname, 'data', 'restaurant.json'),
    JSON.stringify(fileData)
  );
  res.redirect('/confirm');
});

app.get('/restaurant/:id', function (req, res) {
  const restaurantId = req.params.id;
  const restaurants = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'restaurant.json'))
  );
  for (const restaurant of restaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurant-detail', { restaurant: restaurant });
    }
  }
  res.render('error404');
});

app.use(function (req, res) {
  res.render('error404');
});

app.use(function (error, req, res, next) {
  res.render('error500');
});

app.listen(3000);
