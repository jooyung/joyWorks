var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var books = require('./routes/books');
// var contacts = require('./routes/contacts');
// var joins = require('./routes/joins');
// var memos = require('./routes/memos');
// var works = require('./routes/works');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.enable('trust proxy');
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

/**
 * S T A T I C
 */
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * R O U T E S
 */
app.use('/', require('./routes/index'));
app.use('/books', require('./routes/books'));
app.use('/contacts', contacts = require('./routes/contacts'));
app.use('/joins', joins = require('./routes/joins'));
app.use('/memos', memos = require('./routes/memos'));
app.use('/works', require('./routes/works'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
console.log(__filename, app.settings.env);
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
