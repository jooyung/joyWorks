/**
 * Bookmark Name Changer
 * ---
 * works in Adobe Reader XI
 * modified 2015-03-16
 */

var len = bookmarkRoot.children.length;
var i, bmk, bmkname;
var changeColor = true;

//-- Patterns
var pO = { 0: [/^\s*[cC]hapter\s*(\d+):/, "$1."], 1: [/^(Part|PART)\s*(\w+):/, "$2."], 2: [/^Appendix\s*/, ""], 3: [/^(\d+)/, "$1."] }

/**
 * printing easily
 */
function cc(str) {
	console.println(str);
}

/**
 * ReGex
 */

function applyReGex(filename) {
	var newName = false;
	for (var k in pO)  {
		if (pO[k][0].test(filename)) {
			filename = filename.replace(pO[k][0], pO[k][1]);
			newName = filename;
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
			bmk.name = newName;
			cc(sp + "==> " + bmk.name);
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
var count = 0;
changeNames(bookmarkRoot, '');