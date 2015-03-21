var
	io
	, fxInterval
	, users = []
	, fx = require('./fxcalc')
	, joysql = require('./joysql')
;

/**
 * start Fx Interval
 */

var fxInterval = setInterval(function() {
  fx.FxRetrieval();
}, 1000*60);

/**
 * socket FxRates to clients
 */

function informFxRates (fxrates) {
  io.sockets.emit('fx', { fx: fxrates });
  if (users.length !== 0) users[0].emit('question', {question: "Are you " + users[0].id + "?"});
}

/**
 * query fx
 * --
 * upon client's connection, query once to supply fx rates from db to clients
 */

function onetimeFxQuery() {
	var db = {};
	db.sql = "SELECT * FROM ??";
	db.inserts = ["fxrates"];
	db.category = "fx onetime";
	db.dbop = "simple";
	joysql.onequery(db);
}

/**
 * socket server
 * --
 * When a client gets connected, query db for fxrates to supply
 */

function listen (server){
    io = require('socket.io').listen(server);
    console.log(__filename, "socket starts");

	io.on('connection', function (socket) {
		users.push(socket);
		socket.emit('client', { client: socket.id });
		onetimeFxQuery(); //-- runs once per client
	});
}

/**
 * exports
 */

module.exports.listen = listen;
module.exports.informFxRates = informFxRates;
