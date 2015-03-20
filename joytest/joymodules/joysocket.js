var
	fxInterval
	, users = []
	, fx = require('./fxcalc')
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
 * socket server
 */

function listen (server){
    var io = require('socket.io').listen(server)

	io.on('connection', function (socket) {
	  users.push(socket);
	  socket.emit('client', { client: socket.id });
	  // informFxRates();
	});
}

/**
 * exports
 */

module.exports.listen = listen;
module.exports.informFxRates = informFxRates;