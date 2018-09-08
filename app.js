const express = require('express');//inbuilt module
const bodyParser = require('body-parser'); //inbuilt module
const controller = require('./controller.js'); //custom module
const urlencodedParser = bodyParser.urlencoded({extended:false})
const apiRoutes = require('./router.js'); //custom module

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api', apiRoutes);
