/**
 * List out Bookmarks
 * ---
 * works in Adobe Reader XI
 * modified 2015-03-16
 */

var mark = '#'; //- for markdown
// var count = 0; //- For testing

//-- dir means the first chilren of the bookmarkRoot
var skipDir = ['AAA', 'AA', 'Words', 'Index', 'Contents'];

/**
 * Listing
 */

function listBookmarks(bObj, sp) {
	var bmk, i;

	if (!bObj.children) return;

	//-- list out
	for (i in bObj.children) {
		bmk = bObj.children[i];

		//-- see if to skip the directory
		if (!isSkipDir(bmk.name)) {
			console.println(sp + " " + bmk.name);

			//-- has children? Go Deep
			if (bmk.children) listBookmarks(bmk, sp + "#");
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
 * Main
 */

console.clear();
listBookmarks(bookmarkRoot, mark);
