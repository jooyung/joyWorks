/*
([^\d])$
 */

var pageIncrease = 4;
var source =
[
	["^AAA"]
	,["$a"]
	,["^AA"]
	,["Cover"]




	,["$차례", 8]
	,[":차례", 8]




];



this.bookmarkRoot.remove();
console.println("\r");

/**
 * Do it: Convert Data, Start, Console Clear
 */

var data = converting();
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

function makeBookmark(BOOKMARK, pos, bmkArray) {
	var len = bmkArray.length;
	var myName, myPagenumber, myStyle, myColor;
	myName = bmkArray[0];
	myPagenumber = 0;
	myStyle = 0;
	myColor = "black";
	if (len > 1) myPagenumber = bmkArray[1] + pageIncrease;
	if (len > 2) myStyle = bmkArray[2];
	if (len > 3) myColor = bmkArray[3];

	if (myColor == "blue") myColor = ["RGB", 0, 0.0, 1];
	else if (myColor == "green") myColor = ["RGB", 0, 0.3, 0.7];
	else if (myColor == "red") myColor = ["RGB", 1, 0.0, 0.0];

	BOOKMARK.createChild(myName, "pageNum="+myPagenumber, pos);
	var childBookmark = BOOKMARK.children[pos];
	childBookmark.style = myStyle;
	childBookmark.color = myColor;

	//console.println("name: " + myName + ", page: " + myPagenumber + ", style: " + myStyle + ", color: " + myColor);
}

function checkType(myData) {
	if (myData instanceof Array) return "array";
	else if (myData instanceof Object) return "object";
}

