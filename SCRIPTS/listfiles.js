/*
	List Files
	-------------
	2015-05-24
	List files in a directory, namely MD directory in this case
	Click on one of them, and it will be open in another tab
 */

var
	dir =  'd:\\GitHub\\joyWorks\\MD'
	, fs = require('fs')
	, files
;


/*
	Change Directory to SCANNED FILES
 */
try {
	process.chdir(dir);
	console.log('Changed Directory: ' + process.cwd());
} catch (err) {
	console.log('Error chdir: ' + err);
}
