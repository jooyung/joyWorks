/**
 * Append bookmarks under a certain existing bookmark
 */

var parentName = "Tables";
var parentOrder = 3; //- order number under bookmarkRoot
var pageIncrease = 16;

var source =
[
	["2.1. Go’s Keywords", 52]
	,["2.2. Go’s Predefined Identifiers", 52]
	,["2.3. Boolean and Comparison Operators", 57]
	,["2.4. Arithmetic Operators Applicable to All Built-In Numbers", 59]
	,["2.5. Go’s Integer Types and Ranges", 60]
	,["2.6. Arithmetic Operators Applicable Only to Built-In Integer Types", 60]
	,["2.7. Go’s Floating-Point Types", 64]
	,["2.8. The Math Package’s Constants and Functions #1", 65]
	,["2.9. The Math Package’s Constants and Functions #2", 66]
	,["2.10. The Math Package’s Constants and Functions #3", 67]
	,["2.11. The Complex Math Package’s Functions", 71]
	,["3.1. Go’s String and Character Escapes", 84]
	,["3.2. String Operations", 85]
	,["3.3. The Fmt Package’s Print Functions", 94]
	,["3.4. The Fmt Package’s Verbs", 95]
	,["3.5. The Fmt Package’s Verb Modifiers", 96]
	,["3.6. The Strings Package’s Functions #1", 108]
	,["3.7. The Strings Package’s Functions #2", 109]
	,["3.8. The Strconv Package’s Functions #1", 114]
	,["3.9. The Strconv Package’s Functions #2", 115]
	,["3.10. The Utf8 Package’s Functions", 118]
	,["3.11. The Unicode Package’s Functions", 119]
	,["3.12. The Regexp Package’s Functions", 121]
	,["3.13. The Regexp Package’s Escape Sequences", 121]
	,["3.14. The Regexp Package’s Character Classes", 122]
	,["3.15. The Regexp Package’s Zero-Width Assertions", 122]
	,["3.16. The Regexp Package’s Quantifiers", 123]
	,["3.17. The Regexp Package’s Flags and Groups", 123]
	,["3.18. The *regexp.Regexp Type’s Methods #1", 124]
	,["3.19. The *regexp.Regexp Type’s Methods #2", 125]
	,["4.1. Slice Operations", 151]
	,["4.2. The Sort Package’s Functions", 161]
	,["4.3. Map Operations", 165]
	,["5.1. Built-In Functions", 187]
	,["8.1. Format Speed and Size Comparisons", 363]
	,["8.2. The Fmt Package’s Scan Functions", 383]




];



/**
 * Do it: Convert Data, Start, Console Clear
 */
var parentBookmark = getParent(bookmarkRoot, parentOrder, parentName);
append(parentBookmark, source);
console.clear();

/**
 * Functions
 */

/**
 * get paretnt
 */

function getParent(bookmark, ordnum, name) {
	var bmk = bookmark.children[ordnum];
	if (bmk.name != name) {
		console.println("The name of the parent is not solved!");
		return;
	}

	return bmk;
}

function append(BOOKMARK, data) {
	for (var i in data) {
		makeBookmark(BOOKMARK, i, data[i]);
	}
}

/**
 * make a bookmark as a child
 * --------------------------
 * BOOKMARK: parent
 * pos: postion under parent for a new child
 * bmkArray: info array for a bookmark
 */

function makeBookmark(BOOKMARK, pos, bmkInfo) {
	var len = bmkInfo.length;
	var myName, myPagenumber, myStyle, myColor;
	myName = bmkInfo[0];
	myPagenumber = 0;
	myStyle = 0;
	myColor = "black";
	if (len > 1) myPagenumber = bmkInfo[1] + pageIncrease;
	if (len > 2) myStyle = bmkInfo[2];
	if (len > 3) myColor = bmkInfo[3];

	if (myColor == "blue") myColor = ["RGB", 0, 0.0, 1];
	else if (myColor == "green") myColor = ["RGB", 0, 0.3, 0.7];
	else if (myColor == "red") myColor = ["RGB", 1, 0.0, 0.0];

	BOOKMARK.createChild(myName, "pageNum="+myPagenumber, pos);
	var childBookmark = BOOKMARK.children[pos];
	childBookmark.style = myStyle;
	childBookmark.color = myColor;

	//console.println("name: " + myName + ", page: " + myPagenumber + ", style: " + myStyle + ", color: " + myColor);
}
