const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//animals route
ROUTER.get('/loveit/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']});
});
//foods route
ROUTER.get('/loveit/foods', (req, res) => {
  res.render('foods', {foods: ['kimchee', 'salmon', 'crawdad boil', 'alomonds', 'peanut butter', 'feta cheese and olives', 'kale', 'brussel sprouts', 'sherbert', 'chili']});
});

module.exports = ROUTER;