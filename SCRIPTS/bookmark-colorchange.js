var len = bookmarkRoot.children.length;
var i, bmk, bmkname;

// Make second-deep children black
var godeep = 1;
var j, godeepLen, godeepBmk;

console.println("\r-----------S T A R T-----------------\r");

for (i=0; i<len; i++) {
    bmk = bookmarkRoot.children[i];
    bmkname = bmk.name;
    console.println(bmkname);
    //if (bmkname == 'C-20150201-094046-0001') continue;
    if (bmkname != 'AAA' && bmkname != 'AA' && bmkname != 'Words' && bmkname != 'Contents') {
		bmk.style = 0;
		bmk.color = ["RGB", 0, 0, 1];

		// 2nd Level
		if (godeep && bmk.children && bmk.children.length > 0) {
			godeepLen = bmk.children.length;
			for (j=0; j<godeepLen; j++) {
				godeepBmk = bmk.children[j];
				console.println("-----> " + godeepBmk.name);
				godeepBmk.style = 2;
				godeepBmk.color = ["RGB", 0, 0, 0];
			}
		}
	}
}
console.println("-------------E N D-------------------\r");
