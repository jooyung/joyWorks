/**
 * List out Bookmarks for AsciiDoc
 * ---
 * works in Adobe Reader XI, Foxit
 * modified 2015-04-19
 */

var
	count = 0 //- For testing
	, headerLength
	, tmpIndex
	, chapterCounter = 0
	, chapterSubtract = 0 //- When introduction or preface is included, set this to 1
	, sectionCounter = 0 //- 0 avoids the first chapter starts from 1
	, totalCounter = 0
	, totalCounterMode = 3 //- 2: Chapter, 3: Section, 4: All
	, sectionReset =  true //- Section will start again in a new chapter
	, mark  = '='  //- chapter/section marks, AsciDoc: '=', MarkDown: '#'
	, skipDir = ['aaa', 'aa', 'contents', 'content at a glance', 'index', 'introduction', 'table of contents', 'words', '목차', '차례']
;

/**
 * Listing
   ----------------
   AsciiDoc needs id of [[an_id_form]]
   chapter: '=='
   section: '==='
 */

function listBookmarks(bObj, header, mark) {
	var bmk, i, bmkname;

	if (!bObj.children) return;

	//-- list out
	for (i in bObj.children) {
		bmk = bObj.children[i];
		tmpname = bmk.name;

		//-- see if to skip the directory
		if (!isSkipDir(bmk.name)) {
			headerLength = header.length;

			if (headerLength == 2) { //- chapter
				chapterCounter++;
				if (sectionReset) sectionCounter = 0;
				tmpIndex = chapterCounter - chapterSubtract;
			} else if (headerLength == 3) { //- section
				sectionCounter++;
				if (totalCounterMode == 4) {
					totalCounter++;
					tmpIndex = joinArguments(chapterCounter - chapterSubtract, sectionCounter, totalCounter);
				}
				else {
					tmpIndex =  joinArguments(chapterCounter - chapterSubtract, sectionCounter);
				}
			} else {
				totalCounter++;
				tmpIndex = joinArguments(chapterCounter - chapterSubtract, sectionCounter, totalCounter);
			}

			//- Chapter Number is requied for easy moving in the document
			//- id: _chapterCounter_sectionCounter_totalCounter_
			console.println("[[_" + tmpIndex + "_]]");
			console.println(header + " " + bmk.name + "\n");

			//-- has children? Go Deep
			//-- with new header of additional mark
			if (bmk.children) listBookmarks(bmk, header + mark, mark);
		}
	}
}

/**
 * joinArguments
 * -----------------
 *  link chapter, section, and others by '_'
 */

 function joinArguments() {
 	var args = Array.prototype.slice.call(arguments);
 	return args.join('_');
 }

function printHeader(header, totalCounterMode, chapterCounter, sectionCounter, totalCounter) {
	//- Chapter Number is requied for easy moving in the document
	//- id: _chapterCounter_sectionCounter_totalCounter_
	if (totalCounterMode == 2)  console.println("[[_" + (chapterCounter - chapterSubtract) + "_]]");
	else if (totalCounterMode == 3) console.println("[[_" + (chapterCounter - chapterSubtract) + "_" + sectionCounter +  "_]]");
	else console.println("[[_" + (chapterCounter - chapterSubtract) + "_" + sectionCounter + "_" + totalCounter + "_]]");

	console.println(header + " " + bmk.name + "\n");
}


// function listBookmarks(bObj, header, mark) {
// 	var bmk, i, bmkname;

// 	if (!bObj.children) return;

// 	//-- list out
// 	for (i in bObj.children) {
// 		bmk = bObj.children[i];
// 		tmpname = bmk.name;

// 		//-- see if to skip the directory
// 		if (!isSkipDir(bmk.name)) {
// 			//- counters
// 			if (header.length == 2) {
// 				chapterCounter++;
// 				if (sectionReset) sectionCounter = 0;
// 				if (totalCounterMode == 2) totalCounter++;
// 			} else if (header.length == 3) {
// 				sectionCounter++;
// 				if (totalCounterMode == 3) totalCounter++;
// 			} else if (totalCounterMode == 4) totalCounter++;

// 			//- Chapter Number is requied for easy moving in the document
// 			//- id: _chapterCounter_sectionCounter_totalCounter_
// 			console.println("[[_" + (chapterCounter - chapterSubtract) + "_" + sectionCounter + "_" + totalCounter + "_]]");
// 			console.println(header + " " + bmk.name + "\n");

// 			//-- has children? Go Deep
// 			//-- with new header of additional mark
// 			if (bmk.children) listBookmarks(bmk, header + mark, mark);
// 		}
// 	}
// }

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
 * Date of start for marking the version number
 */

  function getInitDate() {
    var d = new Date;
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var day = d.getDate();

    return year + "-" + month + "-" + day;
 }


/**
 * Preamble: write something that should appear in the beginning of every document
 */

 function preamble() {
 	console.println("[[_0_]]");
 	console.println("= 제목");
 	console.println("Joy <arbago@gmail.com>");
 	console.println("v1.0, " + getInitDate());
 	console.println(":icons: font");
 	console.println(":sectanchors:");
 	console.println(":imagesdir: images");
 	console.println(":homepage: http://arbago.com")
 	console.println(":toc: macro\n");
 	console.println("toc::[]\n");
 	console.println("[preface]");
 	console.println("== 책\n");
 	console.println("[preface]");
 	console.println("== 머릿말\n");
 }

/**
 * Main
 */

console.clear();
preamble();
header = mark + mark;
listBookmarks(bookmarkRoot, header, mark);
