var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var joy = require('./joymodules');

/* -------------------------------------
 *  A P P   AND    E N G I N E
------------------------------------- */
var app = express();
var appHttp = express();

/*
| from http://www.meanstack.co/post-json-to-nodejs-from-angularjs/
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.all('*', function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	next();
//  });


/*
|----------------------------------
|   S T A T I C
|----------------------------------
*/
var publicdir = path.join(__dirname, 'public');
var libdir = path.join(__dirname, 'lib');
app.use('/lib', express.static(libdir));
app.use(express.static(publicdir));
// console.log("Static Directory: " + libdir);

/*
|-------------------------------
|   F X
|-------------------------------
*/
// var fx = setInterval(function() {
// 	var fxcount = 0;
// 	joy.fxcalc.FxRetrieval();
// 	if (fxcount++ == 100) clearInterval(fx);
// }, 1000*60);

/*
|-------------------------------
|   R O U T E S: D B
|-------------------------------
*/
app.post('/db', function(req, res) {
	joy.joysql.onequery(req.body.db, res);
});

/*
|---------------------------
| SIMPLE ROUTES
|---------------------------
*/
// base page
app.get('/', function(req, res) {
	console.log("Hello I'm root");
	res.sendFile(path.join(publicdir, 'index.html'));
});

// custom 404 page
app.use(function(req, res) {
	res.status(404);
	// res.render('404')
});

// custom 500 page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	// res.render('500');
});

/**
 * -------------------------------
 * H T T P S
 * -------------------------------
 * THE joy-key.pem and joy-cert.pem are made as below
 * -------------------------------
	http://www.hacksparrow.com/express-js-https.html
	Posted on March 22nd, 2012

	openssl genrsa -out joy-key.pem 1024
	openssl req -new -key joy-key.pem -out certrequest.csr
	openssl x509 -req -in certrequest.csr -signkey joy-key.pem -out joy-cert.pem
 */
var certPath = "cert";
var httpsOptions = {
    key: fs.readFileSync(path.join(certPath, "joy-key.pem")),
    cert: fs.readFileSync(path.join(certPath, "joy-cert.pem"))
};

// appHttp.get("*", function (req, res, next) {
//     res.redirect("https://" + req.headers.host + "/" + req.path);
// });

//http://www.tonyerwin.com/2014/09/redirecting-http-to-https-with-nodejs.html
// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See
// http://expressjs.com/api#app-settings for more details.
// app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see
// http://expressjs.com/api#req.secure). This allows us
// to know whether the request was via http or https.
// appHttp.use (function (req, res, next) {
// 	if (req.secure) {
// 		// request was via https, so do no special handling
// 		next();
// 	} else {
// 		// request was via http, so redirect to https
// 		res.redirect('https://' + req.headers.host + req.url);
// 	}
// });

/*
|-------------------------------------
| C R E A T E     S E R V E R
|-------------------------------------
*/
app.set('port', process.env.PORT || 8888);
var server = http.createServer(app);
// appHttp.set('port', process.env.PORT || 80);
// var serverHttp = http.createServer(appHttp);
// var server = https.createServer(httpsOptions, app);

/*
|-------------------------------------
| S T A R T    S E R V E R
|-------------------------------------
*/
// var server = app.listen(app.get('port'), function() {
// 	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
// });

server.listen(app.get('port'), function() {
	console.log('HTTP server listening on port ' + app.get('port'));
});

// serverHttp.listen(appHttp.get('port'), function() {
// 	console.log('Express HTTP server listening on port ' + appHttp.get('port'));
// });

// server.listen(app.get('port'), function() {
// 	console.log('Express HTTPS server listening on port %d', server.address().port);
// });

/*
|----------------------------------
|   S O C K E T . I O
|----------------------------------
*/
// var io = require('socket.io').listen(server);

// var users = [];
// var fxrates;

// function informFxRates () {
// 	io.sockets.emit('fx', { fx: joy.joysql.fxrates });
// 	if (users) users[0].emit('question', {question: "Are you " + users[0].id + "?"});
// }

// io.on('connection', function (socket) {
// 	users.push(socket);
// 	socket.emit('client', { client: socket.id });
// 	informFxRates();
// });

// exports.io=io;
// exports.informFxRates = informFxRates;
