/**
 * List out Bookmarks for AsciiDoc
 * ---
 * works in Adobe Reader XI, Foxit
 * modified 2015-04-19
 */

var mode = 1; //- 1: Asciidoc, 2: markdown
var mark = mode == 1 ? '=' : '#'; //- chapter/section marks, AsciDoc: '=', MarkDown: '#'
// var count = 0; //- For testing

//-- dir means the first chilren of the bookmarkRoot
var skipDir = ['aaa', 'aa', 'words', 'index', 'contents', 'table of contents'];

//-- Patterns
var pAr = [
	[/C#/g, 'CSharp']
	, [/[^a-zA-Z\d:]/g, '_']
	, [/_+/g, '_']
	, [/^_|^\d+|_$/g, '']
];

/**
 * Listing
 */

function convertHangel(AString) {
	var tmp = [];
	for (var i in AString) {
		if (/[가-힣]/.test(AString[i])) tmp.push(':' + AString[i].charCodeAt());
		else tmp.push(AString[i]);
	}
	return tmp.join('');
}

function listBookmarks(bObj, header, mark, mode) {
	var bmk, i, bmkname;

	if (!bObj.children) return;

	//- AsciiDoc needs one more mark for chapters and sections becasue only one mark means DocBook
	var headerattach = mode == 1 ? mark : '';

	//-- list out
	for (i in bObj.children) {
		bmk = bObj.children[i];
		tmpname = bmk.name;

		//-- see if to skip the directory
		if (!isSkipDir(bmk.name)) {
			//- AsciiDoc needs id of [[an_id_form]]
			if (mode == 1) {
				tmpname = convertHangel(tmpname);
				// console.println(tmpname);
				console.println("[[" + doRegex(tmpname) + "]]");
			}
			console.println(header + headerattach + " " + bmk.name + "\n");

			//-- has children? Go Deep
			if (bmk.children) listBookmarks(bmk, header + mark, mark, mode);
		}
	}
}

function doRegex(astring) {
	var tmp = astring;
	for (var i in pAr) {
		tmp = tmp.replace(pAr[i][0], pAr[i][1]);
		// cc("tmp: ", tmp);
	}

	// cc();

	return tmp.toLowerCase();
}

/**
 * Skip Directories
 */

function isSkipDir(dir) {
	var tmp = dir.toLowerCase();
	for (var i in skipDir)
		if (tmp === skipDir[i]) return true;

	return false;
}

/**
 * Main
 */

console.clear();
listBookmarks(bookmarkRoot, mark, mark, mode);
