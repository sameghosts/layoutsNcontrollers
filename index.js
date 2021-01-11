// require and create instance
const EXPRESS = require('express');
const APP = EXPRESS();
const EJSLAYOUTS = require('express-ejs-layouts');

//view engine ejs
APP.set('view engine', 'ejs');
//ejs layouts
APP.use(EJSLAYOUTS);

//home route
APP.get('/', (req, res) => {
  res.render('home');
});
//animals route
APP.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']});
});
//foods route
APP.get('/foods', (req, res) => {
  res.render('foods', {foods: ['kimchee', 'salmon', 'crawdad boil', 'alomonds', 'peanut butter', 'feta cheese and olives', 'kale', 'brussel sprouts', 'sherbert', 'chili']});
});
//movies route
APP.get('/movies', (req, res) => {
  res.render('movies', {movies: ['forrest gump', 'Crash(not the Sebald / Cronenburg one', 'Pretty much any comedy but especially anything starring Will Ferrel', 'Goodfellas', 'The Departed', 'Any Marvel Movie']});
});
//products route
APP.get('/products', (req, res) => {
  res.render('products', {products: ['single ply toilet paper', 'shitty paper towels', 'nonstick teflon cookwear', 'high socks', 'overhyped prestige television', 'in ear headphones', 'kerug coffee makers']});
});

APP.listen(8710);

//for the layouts branch
