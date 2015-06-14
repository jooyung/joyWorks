/*
([^\d])$
276
208
핸재
194
230
 */

var pageIncrease = 4;
var source =
[
	["^AAA"]
	,["$a"]
	,["^Words"]
	,["$a"]
	,["^AA"]
	,["Cover"]





	,["$차례", 4]
	,[":차례", 4]





];



bookmarkRoot.remove();
console.println("\r");

/**
 * Do it: Convert Data, Start, Console Clear
 */

var data = converting();

console.clear();
start(bookmarkRoot);
console.clear();

/**
 * Functions
 */

function converting() {
	var data = [];
	var len = source.length;
	var i, head, item, old;

	for (i=0; i<len; i++) {
		item = source[i];
		head = item[0][0];
		if (head == "^") {
			old = {};
			item[0] = item[0].substring(1);
			old.first = item;
			old.second = [];
		} else if (head == ":") {
			item[0] = item[0].substring(1);
			data.push({first: item});
		} else if (head == "$") {
			item[0] = item[0].substring(1);
			old.second.push(item);
			data.push(old);
			old = {};
		} else {
			old.second.push(item);
		}
	}

	return data;
}


function makeBookmark(BOOKMARK, pos, bmkArray) {
	var len = bmkArray.length;
	var myName, myPagenumber, myStyle, myColor;
	myName = bmkArray[0];
	myPagenumber = 0;
	myStyle = 0;
	myColor = "black";
	if (len > 1) myPagenumber = parseInt(bmkArray[1]) + pageIncrease;
	if (len > 2) myStyle = bmkArray[2];
	if (len > 3) myColor = bmkArray[3];

	BOOKMARK.createChild(myName, "pageNum="+myPagenumber, pos);
	var childBookmark = BOOKMARK.children[pos];
	childBookmark.style = myStyle;
	childBookmark.color = color[myColor]; //- This works great
}

/**
 * Color
 * -----
 * If something about color goes not the way, then use this method
 */

function setColor(color) {
	var tmpColor = [];

	switch (color) {
		case "black":
			tmpColor = ["G", 0];
			break;
		case "blue":
			tmpColor = ["RGB",0,0,1];
			break;
		case "transparent":
			tmpColor = ["T"];
			break;
		case "white":
			tmpColor = ["G", 1];
			break;
		case "red":
			tmpColor = ["RGG",1,0,0];
			break;
		case "green":
			tmpColor = ["RGG",0,1,0];
			break;
		case "cyan":
			tmpColor = ["CMYK", 1,0,0,0];
			break;
		case "magenta":
			tmpColor = ["CMYK", 0,1,0,0];
			break;
		case "yellow":
			tmpColor = ["CMYK", 0,0,1,0];
			break;
		case "dkGray":
			tmpColor = ["G", 0.25];
			break;
		case "gray":
			tmpColor = ["G", 0.5];
			break;
		case "ltGray":
			tmpColor = ["G", 0.75];
			break;
		default:
			tmpColor = ["G", 0];
			break;

		return tmpColor;
	}
}

function start(BOOKMARK) {
	var i;
	for (i in data) {
		makeBookmark(BOOKMARK, i, data[i]["first"]);
		console.println("\r");
	}

	for (i in data) {
		handleChildren(BOOKMARK.children[i], data[i]["second"]);
	}
}

function handleObject(BOOKMARK, pos, myObj) {
	if (checkType(myObj) != "object") return;
	makeBookmark(BOOKMARK, pos, myObj["first"]);
	// console.println(pos + " : " + BOOKMARK.children.length);
	handleChildren(BOOKMARK.children[pos], myObj["second"]);
	// console.println(BOOKMARK.children.length);
}

function handleChildren(BOOKMARK, myArray) {
	if (checkType(myArray) != "array") return;
	var i, myData, myType;
	for (i in myArray) {
		myData = myArray[i];
		myType = checkType(myArray[i]);
		if (myType == "array") {
			makeBookmark(BOOKMARK, i, myData);
		}
		else if (myType == "object") {
			// console.println("-----------------------------");
			// console.println("   C H I L D R E N    ");
			// console.println("-----------------------------");
			handleObject(BOOKMARK, i, myData);
		}
	}
}

function checkType(myData) {
	if (myData instanceof Array) return "array";
	else if (myData instanceof Object) return "object";
}

