var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//

var d = new Date;
var month = d.getMonth() + 1;
month < 10 ? month = "0" + month;
cc(month)