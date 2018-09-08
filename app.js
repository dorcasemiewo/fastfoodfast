var express = require('express');//inbuilt module
var bodyParser = require('body-parser'); //inbuilt module
var controller = require('./controller/controller.js'); //custom module
var urlencodedParser = bodyParser.urlencoded({extended:false})
var apiRoutes = require('./routes/routes.js'); //custom module

var app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes for your endpoint
app.use('/api', apiRoutes.router);

//routes for your html pages
app.use('/', apiRoutes.htmlrouter);

//catch 404 and forward to error handler
app.use(function(req, res, next){
  var err = new Error('Not Found');
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

var server = app.listen(app.get('port'), function(){
  console.log('server is listening on port: '+ server.address().port);
});

module.exports = {app:app, server:server};
