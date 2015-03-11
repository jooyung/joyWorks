var express = require('express')
	, app = express()
	, appHttp = express()
	, http = require('http')
	, https = require('https')
	, server
	, serverHttp
	, io
	, fs = require('fs')
	, path = require('path')
	, bodyParser = require('body-parser')
	, joy = require('./joymodules')
;


var certPath = "cert"
	, users = []
	, fxrates
;

var httpsOptions = {
    key: fs.readFileSync(path.join(certPath, "joy-key.pem")),
    cert: fs.readFileSync(path.join(certPath, "joy-cert.pem"))
};

/*
|----------------------------------
|   A P P   AND    E N G I N E
|----------------------------------
| from http://www.meanstack.co/post-json-to-nodejs-from-angularjs/
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
 });


/*
|----------------------------------
|   S T A T I C
|----------------------------------
*/
var publicdir = path.join(__dirname, 'public');
var libdir = path.join(__dirname, 'lib');
app.use('/lib', express.static(libdir));
app.use(express.static(publicdir));
// console.log(publicdir);

/*
|----------------------------------
|   R O U T E S: D B
|----------------------------------
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
 */
// httpApp.get("*", function (req, res, next) {
//     res.redirect("https://" + req.headers.host + "/" + req.path);
// });
app.enable('trust proxy');

appHttp.use (function (req, res, next) {
	if (req.secure) {
		// request was via https, so do no special handling
		next();
	} else {
		// request was via http, so redirect to https
		res.redirect('https://' + req.headers.host + req.url);
	}
});

/*
|-------------------------------------
| C R E A T E     S E R V E R
|-------------------------------------
*/
appHttp.set('port', process.env.PORT || 80);
serverHttp = http.createServer(appHttp);

app.set('port', process.env.PORT || 443);
server = https.createServer(httpsOptions, app);

/*
|----------------------------------
|   S O C K E T . I O
|----------------------------------
*/
io = require("socket.io").listen(server)

io.on('connection', function (socket) {
	users.push(socket);
	socket.emit('client', { client: socket.id });
	informFxRates();
});

function informFxRates () {
	io.sockets.emit('fx', { fx: joy.joysql.fxrates });
	if (users) users[0].emit('question', {question: "Are you " + users[0].id + "?"});
}

exports.io=io;
exports.informFxRates = informFxRates;

/*
|-------------------------------
|   F X
|-------------------------------
*/
var fx = setInterval(function() {
	var fxcount = 0;
	joy.fxcalc.FxRetrieval();
	if (fxcount++ == 100) clearInterval(fx);
}, 1000*60);

/*
|-------------------------------------
| S T A R T    S E R V E R
|-------------------------------------
*/
// var server = app.listen(app.get('port'), function() {
// 	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
// });

serverHttp.listen(appHttp.get('port'), function() {
	console.log('HTTP server listening on port ' + appHttp.get('port'));
});

server.listen(app.get('port'), function() {
	console.log('HTTPS server listening on port %d', server.address().port);
});
