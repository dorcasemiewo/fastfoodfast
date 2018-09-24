const express = require('express');//inbuilt module
const bodyParser = require('body-parser'); //inbuilt module
const controller = require('./controller/controller.js'); //custom module
const urlencodedParser = bodyParser.urlencoded({extended:false})
const apiRoutes = require('./routes/routes.js'); //custom module

const app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes to the endpoint
app.use('/api', apiRoutes.router);
//routes for html pages
app.use('/', apiRoutes.htmlrouter);

//catch 404 and forward to error handler
app.use(function(req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'? err: {};
  res.status(err.status || 500);
  res.render('error');
});



app.set('port', (process.env.PORT || 5000));

const server = app.listen(app.get('port'), function(){
  console.log('server is listening on port: '+ server.address().port);
});

module.exports = {app:app, server:server};
