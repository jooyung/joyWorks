/**
 * Color Bookmarks
 * ----------------------
 * Modified: 2015-03-30 (turn it to functions, and clean the code)
 * ----------------------
 * The first level is blue, and the second bold
 */

//-- Make second-deep children black
var
	bmk
	, godeep = false
	, godeepBmk
;

//-- dir means the first chilren of the bookmarkRoot
var skipDir = ['AAA', 'AA', 'Words', 'Contents', 'Table of Contents', 'Contents at a Glance'];

/**
 * color bookmarks
 */

function colorBookmarks(bmkObj) {
	for (var i in bmkObj.children) {
	    bmk = bmkObj.children[i];
	    // console.println(bmk.name);
	    if (!isSkipDir(bmk.name)) {
			bmk.style = 0;
			bmk.color = ["RGB", 0, 0, 1];

			//-- 2nd Level
			if (godeep && bmk.children && bmk.children.length > 0) {
				for (var j in bmk.children) {
					godeepBmk = bmk.children[j];
					// console.println("-----> " + godeepBmk.name);
					godeepBmk.style = 2;
					godeepBmk.color = ["RGB", 0, 0, 0];
				}
			}
		}
	}
}

/**
 * Skip Directories
 */

function isSkipDir(dir) {
	for (var i in skipDir)
		if (dir === skipDir[i]) return true;

	return false;
}

/**
 * Start
 */

colorBookmarks(bookmarkRoot);
console.clear();