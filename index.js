// require and create instance
const EXPRESS = require('express');
const APP = EXPRESS();
const EJSLAYOUTS = require('express-ejs-layouts');

//view engine ejs
APP.set('view engine', 'ejs');
//ejs layouts
APP.use(EJSLAYOUTS);
APP.use('/loveit', require('./controllers/loveit'));
APP.use('/leaveit', require('.controllers/leaveit'));

//home route
APP.get('/', (req, res) => {
  res.render('home');
});
//animals route
// APP.get('/loveit/animals', (req, res) => {
//   res.render('animals', {animals: ['sand crab', 'corny joke dog']});
// });
//foods route
// APP.get('/loveit/foods', (req, res) => {
//   res.render('foods', {foods: ['kimchee', 'salmon', 'crawdad boil', 'alomonds', 'peanut butter', 'feta cheese and olives', 'kale', 'brussel sprouts', 'sherbert', 'chili']});
// });
// //movies route
// APP.get('/leaveit/movies', (req, res) => {
//   res.render('movies', {movies: ['forrest gump', 'Crash(not the Sebald / Cronenburg one)', 'Pretty much any comedy but especially anything starring Will Ferrel', 'Goodfellas', 'The Departed', 'Any Marvel Movie']});
// });
// //products route
// APP.get('/leaveit/products', (req, res) => {
//   res.render('products', {products: ['single ply toilet paper', 'shitty paper towels', 'nonstick teflon cookwear', 'high socks', 'overhyped prestige television', 'in ear headphones', 'kerug coffee makers']});
// });

APP.listen(8710);
