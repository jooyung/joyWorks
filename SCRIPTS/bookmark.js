var pageIncrease = 4;
var source =
[
	["^AAA"]
	,["$a"]
	,["^AA"]
	,["Cover"]
	,["찾아보기", 505]
	,["$차례", 10]
	,[":차례", 10]
	,[":해제", 3, 0, "blue"]
	,["^제1장 삼보품", 50, 0, "blue"]
	,["1. 삼보와 계율에 대한 깨끗한 믿음", 52, 2]
	,["2. 귀의 삼보의 공덕", 61, 2]
	,["3. 삼보를 염하는 생활", 69, 2]
	,["$4. 스스로 깨달아 들어가는 해탈의 삶", 78, 2]
	,["^제2장 불보품", 90, 0, "blue"]
	,["1. 진리의 몸이신 부처님", 92, 2]
	,["2. 실천의 완성이신 부처님", 102, 2]
	,["3. 세간의 구원자이신 부처님", 171, 2]
	,["$4. 부처님의 거룩한 생애", 209, 2]
	,["^제3장 법보품", 278, 0, "blue"]
	,["1. 연기법의 근본 입장", 280, 2]
	,["2. 연기법의 기본 구조", 318, 2]
	,["3. 연기법의 교화 형식", 337, 2]
	,["$4. 존재·인식·실천의 방법", 361, 2]
	,["^제4장 승보품", 462, 0, "blue"]
	,["1. 사부대중의 공동체", 464, 2]
	,["2. 출가 사문의 삶", 480, 2]
	,["3. 재가불자의 삶", 488, 2]
	,["$4. 세상을 향한 헌신적 삶", 496, 2]
];



this.bookmarkRoot.remove();
console.println("\r");

var data = [];

// convert the plain array into a multi-dimensional structured bookmark array
data.push(converting());

// start to make real bookarks in the pdf file
start(bookmarkRoot);

/* ------------------------- */
/*
  creates an object and return it
  ':': just add the array element to the object
 */
function converting() {
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

