var joy = require('./joymodules');
// joy.fxcalc.FxRetrieval();
// var si = setTimeout(joy.fxcalc.FxRetrieval, 1000*60)
var COUNTER = 0;
var si = setInterval(function() {
	COUNTER++;
	joy.fxcalc.FxRetrieval();
	console.log("Counter: " + COUNTER);
	if (COUNTER == 4) clearInterval(si);
}, 1000*60);

// clearInterval(si);