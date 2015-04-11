var
	fs = require('fs')
	, startDir = 'd:\\Scanned\\Scanned Files'
	, toDir = 'd:\\Scanned\\Evens\\'
	, files
	, patt = /(\d{3,})\.jpg|png$/;
;

/*
	Current Directory
 */
console.log('Starting directory: ' + process.cwd());


/*
	Change Directory to SCANNED FILES
 */
try {
	process.chdir(startDir);
	console.log('Changed Directory: ' + process.cwd());
} catch (err) {
	console.log('Error chdir: ' + err);
}

/*
	Read the Directory
 */
try {
	files = fs.readdirSync('.');
} catch(e) {
	console.log('Error ReadDir: ' + e.message);
}

/*
	Comments on the display
 */
console.log('------------------------------------------');
console.log('[Starting to move the even numbered files]');
console.log('[From: ' + startDir + ']');
console.log('[To: ' + toDir + ']');
console.log('------------------------------------------');

/*
	Move Even Numbered Files to the toDir
 */
if (files) {
	console.log('Good! ' + files.length + ' files read');
	console.log('Moving even-numbered files starts ···')
	for (var i in files) {
		if (isEvenFilename(files[i])) {
			fs.rename(files[i], toDir + files[i]);
		}
	}
	console.log('Moving DONE ···')
} else {
	console.log("!!! NO FILES to Operate On !!!");
}

/**
  isEvenFilename
 */
function isEvenFilename(file) {
	var match =patt.exec(file);
	// cc(match[1]);
	return match[1] % 2;
}
