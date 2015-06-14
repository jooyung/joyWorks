/**
 * Bookmark Name Changer
 * ---
 * works in Adobe Reader XI
 * modified 2015-03-16
 */

var len = bookmarkRoot.children.length;
var i, bmk, bmkname;
var changeColor = false;

//-- Patterns
var pO = {
	0: [/^\s*chapter\s*(\w+)[\.:]/i, "$1."]                                           //- Chapter 1. or Chapter 1:          ===> 1.
	, 1: [/^\s*part\s*(\w+)[\.:]/i, "$1."]                                             //- Part II.  or Part 2: or Part 2.             ===> II.
	, 2: [/^\s*appendix\s*(\w+)[\.:]/i, "$1."]       //- Appendix abc  or Appendix 2: or appendix 2.     ===> abc
	}

/**
 * printing easily
 */
function cc(str) {
	console.println(str);
}

/**
 * ReGex
 -----------------------------
 filename.toLowerCase()
 */

function applyReGex(filename) {
	var newName = false;
	// filename = filename.toLowerCase();
	for (var k in pO)  {
		if (pO[k][0].test(filename)) {
			newName = filename.replace(pO[k][0], pO[k][1]);
		}
	}

	return newName;
}

/**
 * Repeat the name-changing
 * @param  {object} bObj bookmark objct
 * @param  {string} sp   blank or a beginning marks
 * @return {none}      return nothing
 */
function changeNames(bObj, sp) {
	var
		bmk
		, len = 0
		, i
		, newName = false
	;

	if (!bObj.children) return;
// if (count++ == 10) exit();
	len = bObj.children.length;
	for (i=0; i<len; i++) {
		bmk = bObj.children[i];

		//-- has children? Go Deep
		if (bmk.children) changeNames(bmk, sp + " + ");

		// cc(sp + bmk.name);

		//-- Process: apply regex to change the name
		if ( newName = applyReGex(bmk.name) ) {
			//cc(sp + bmk.name);
			bmk.name = newName;
			//cc(sp + "==> " + bmk.name);
			//cc();
			if (changeColor) {
				bmk.style = 0;
				bmk.color = ["RGB", 0, 0.0, 1];
			}
		}
	}
}

/**
 * Main
 */
console.clear();
var count = 0;
changeNames(bookmarkRoot, '');
//console.clear();