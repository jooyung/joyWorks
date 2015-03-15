var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//
var
	pA = [/\s+-\s+/, /^(\d+)\s+/, /_+/]
	, rA = ["-", "$1-", " "]
	, pO = { 0: [/\s+-\s+/, "-"], 1: [/^(\d+)\s+/, "$1-"], 2: [/_+/, " "] }
;

var sA = [
	"01 Elvis Presley - (Let Me Be Your) Teddy_Bear.mp3"
	, "02 Elvis Presley - (Now and Then There's) A Fool Such as I.mp3"
	, "03 Elvis Presley - Hard Headed Woman.mp3"
	, "04 Elvis Presley - Burning_Love.mp3"
	, "05 Elvis Presley - She's Not You.mp3"
];
var keys = Object.keys(pO);

for (var s in sA) {
	for (var k in keys)  {
		if (pO[k][0].test(sA[s])) {
			sA[s] = sA[s].replace(pO[k][0], pO[k][1]);
			cc (sA[s]);
		}
	}
}

