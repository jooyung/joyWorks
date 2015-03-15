var len = bookmarkRoot.children.length;
var i, bmk, bmkname;

// put a to-be-deleted string between /^ and /
var toBeDeleted = /^Chapter /

console.println("\r-----------S T A R T-----------------\r");

for (i=0; i<len; i++) {
    bmk = bookmarkRoot.children[i];
    bmkname = bmk.name;
    console.println(bmkname);
    bmkname = bmkname.replace(toBeDeleted, '');
    console.println("==> " + bmkname);
    bmk.name = bmkname;
    //if (bmkname == 'C-20150201-094046-0001') continue;
    //bmk.style = 0;
    //bmk.color = ["RGB", 0, 0, 1];
}
console.println("-------------E N D-------------------\r");
