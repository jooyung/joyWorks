/**
 * File Name Changer In Subdirectories
 * 2015-03-15 (0)
 * ---
 * ex. remove unnecessary spaces in filenames
 * ex. replace underbars with spaces
 * ex. remove unnecessary words
 */

var
	fs = require('fs')
	, path = require('path')
	, patt = /\s+-\s+/
	, replacement = '-'
	, pO = { 0: [/\s+-\s+/g, "-"], 1: [/^(\d+)\s+/, "$1-"], 2: [/_+/g, " "], 3: [/^(\d+)\.\s*/, "$1-"] }
	, fChanged = 0
	, dirCount = 0
	// , startDir = path.join("c:\\Users\\joy\\Music\\Elvis\\Adios Lincoln-2014"
	, startDir = path.join("C:", "Users", "joy", "Music", "Elvis", "Elvis Presley - The Complete 50's Masters")
;

var keys = Object.keys(pO);
function applyReGex(filename) {
	var a = false;
	for (var k in keys)  {
		if (pO[k][0].test(filename)) {
			filename = filename.replace(pO[k][0], pO[k][1]);
			a = filename;
		}
	}

	return a;
}

/**
* Go into each directory and do the work
* ---
 */
function changeNames (dir, sp) {

	var
		files
		, fileName
		, i
		, a
	;

	//-- Where am I?
	console.log(sp + dir);

	//-- Read File list
	try {
		files = fs.readdirSync(dir);
	} catch(e) {
		console.log('Error ReadDir: ' + e.message);
	}

	//-- Process
	for (i in files) {

		fileName = files[i];

		a = applyReGex(fileName);
		// console.log(a);
		if (a) {
			fs.renameSync( path.join(dir, fileName),  path.join(dir, a) );
			fileName = a;
			fChanged++;
			// console.log(sp + ' --- ' + fileName);
		}

		//-- Go Deep
		if ( fs.statSync( path.join(dir, fileName) ).isDirectory() ) {
			dirCount++;
			changeNames( path.join(dir, fileName), sp + ' + ' );
		}

	}
}

//-- Change the directory
/**
 * Change the directory
 * ---
 * Not necessary, but I just feel to do it
 */
try {
	process.chdir(startDir);
} catch (err) {
	console.log('Error chdir: ' + err);
}

changeNames(startDir, '');
console.log("Directories: " + dirCount + " Renamed Files: " + fChanged);
