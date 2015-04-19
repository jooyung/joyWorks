var cc = console.log;
var cr = function() {
	console.log("\r");
}
//---------------------------//

function convertHangel(HString) {
	var tmp = [];
	for (var i in HString) {
		if (/[가-힣]/.test(HString[i])) tmp.push(HString[i].charCodeAt());
		else tmp.push(HString[i]);
	}
	return tmp.join('');
}

var hangel = "The first chapter is 한글 is";

cc(convertHangel(hangel))