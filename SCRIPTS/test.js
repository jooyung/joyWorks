var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//
var
	path = require('path')
	, startDir = "c:/Users/joy/Music/Elvis/Adios Lincoln-2014"
;
var patt = /(\d{3,})\.jpg|png$/;
var testar = [
	"a-000-004.jpg"
	,"a-000-005.jpg"
	,"a-000-006.jpg"
	,"a-000-007.jpg"
	,"a-000-014.jpg"
	,"a-000-015.jpg"
	,"a-000-016.jpg"
	,"a-001.jpg"
	,"a-002.jpg"
	,"a-003.jpg"
	,"a-004.jpg"
	,"a-005.jpg"
	,"a-006.jpg"
	,"a-007.jpg"
	,"a-008.jpg"
	,"a-009.jpg"
	,"a-010.jpg"];



function isEvenFilename(file) {
	var match =patt.exec(file);
	cc(match[1]);
	return match[1] % 2;
}

var match;
for ( i in testar) {
	cc(isEvenFilename (testar[i]))
}