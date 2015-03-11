var cc = console.log;
var cr = function() { console.log('\r') };


var obj = {a: 'a', b: 'b'};
var str = '';
var sAr = [];
for (var i in obj)  {
	sAr.push(i + ":=" + i );
}

//cc(sAr.join(", "))