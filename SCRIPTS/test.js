var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//
var
	path = require('path')
	, startDir = "c:/Users/joy/Music/Elvis/Adios Lincoln-2014"
;

var pO = { 0: [/^\s*[cC]hapter\s+/, ""], 1: [/^PART\s+/, ""] }

for (var k in pO) {
	cc(pO[k])
}