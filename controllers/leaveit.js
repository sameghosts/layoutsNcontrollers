const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//movies route
ROUTER.get('/movies', (req, res) => {
  res.render('leaveit/movies', {movies: ['forrest gump', 'Crash(not the Sebald / Cronenburg one)', 'Pretty much any comedy but especially anything starring Will Ferrel', 'Goodfellas', 'The Departed', 'Any Marvel Movie']});
});
//products route
ROUTER.get('/products', (req, res) => {
  res.render('leaveit/products', {products: ['single ply toilet paper', 'shitty paper towels', 'nonstick teflon cookwear', 'high socks', 'overhyped prestige television', 'in ear headphones', 'kerug coffee makers']});
});

module.exports = ROUTER;