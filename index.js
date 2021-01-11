// require and create instance
const EXPRESS = require('express');
const APP = EXPRESS();
const EJSLAYOUTS = require('express-ejs-layouts');

//view engine ejs
APP.set('view engine', 'ejs');
//ejs layouts
APP.use(EJSLAYOUTS);

APP.listen(8710);
