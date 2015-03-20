var
  express = require('express')
  , path = require('path')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , app = express()
  , joysql = require('./joymodules/joysql')
;

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
app.use('/books', express.static(path.join(__dirname, 'public', 'mypages', 'books')));
app.use('/contacts', express.static(path.join(__dirname, 'public', 'mypages', 'contacts')));
app.use('/joins', express.static(path.join(__dirname, 'public', 'mypages', 'joins')));
app.use('/memos', express.static(path.join(__dirname, 'public', 'mypages', 'memos')));
app.use('/works', express.static(path.join(__dirname, 'public', 'mypages', 'works')));
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

app.use('/api', require('./routes/api'));
app.use('/authenticate', require('./routes/authenticate'));

/**
 * R O U T E S: D B
 */

app.use('/db', function(req, res) {
  console.log(__filename, "I'm /db");
  joysql.onequery(req.body.db, res);
});


//-- Authorization not passed
app.use(function(err, req, res, next) {
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

//-- catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(__filename, "여기서 하는거얌?");
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//-- error handlers

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
