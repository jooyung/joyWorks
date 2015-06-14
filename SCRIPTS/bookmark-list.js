/**
 * List out Bookmarks for AsciiDoc
 * ---
 * works in Adobe Reader XI, Foxit
 * modified 2015-04-19
 */

var
	count = 0 //- For testing
	, chapterCounter = 0
	, chapterSubtract = 0 //- When introduction or preface is included, set this to 1
	, sectionCounter = 0 //- 0 avoids the first chapter starts from 1
	, totalCounter = 0
	, totalCounterLevel = 3 //- 1: Chapter, 2: Section, 3: All
	, sectionReset =  true //- Section will start again in a new chapter
	, mode = 1 //- 1: Asciidoc, 2: markdown
	, mark = mode == 1 ? '=' : '#' //- chapter/section marks, AsciDoc: '=', MarkDown: '#'
	, skipDir = ['aaa', 'aa', 'contents', 'content at a glance', 'index', 'introduction', 'table of contents', 'words', '목차', '차례']
;

/**
 * Listing
   ----------------
   chapter: '==' (header + mark)
   section: '==='
 */

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

				//- counters
				if (header.length == 1) {
					chapterCounter++;
					if (sectionReset) sectionCounter = 0;
					if (totalCounterLevel == 1) totalCounter++;
				} else if (header.length == 2) {
					sectionCounter++;
					if (totalCounterLevel == 2) totalCounter++;
				} else if (totalCounterLevel == 3) totalCounter++;

				//- Chapter Number is requied for easy moving in the document
				//- id: _chapterCounter_sectionCounter_totalCounter_
				console.println("[[_" + (chapterCounter - chapterSubtract) + "_" + sectionCounter + "_" + totalCounter + "_]]");
			}
			console.println(header + headerattach + " " + bmk.name + "\n");

			//-- has children? Go Deep
			if (bmk.children) listBookmarks(bmk, header + mark, mark, mode);
		}
	}
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
listBookmarks(bookmarkRoot, mark, mark, mode);
