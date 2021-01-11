const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//animals route
ROUTER.get('/animals', (req, res) => {
  res.render('loveit/animals', {animals: ['sand crab', 'corny joke dog']});
});
//foods route
ROUTER.get('/foods', (req, res) => {
  res.render('loveit/foods', {foods: ['kimchee', 'salmon', 'crawdad boil', 'alomonds', 'peanut butter', 'feta cheese and olives', 'kale', 'brussel sprouts', 'sherbert', 'chili']});
});

module.exports = ROUTER;