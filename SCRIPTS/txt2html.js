var cc = console.log;

var path = require('path');
var fs = require('fs');
var filePath = path.join('D:', 'GitHub', 'joyWorks', 'MD', '주역-소식-동파역전.txt');
var filePathWrite = path.join('D:', 'GitHub', 'joyWorks', 'MD', '주역-소식-동파역전.html');
var lineReader = require('line-reader');

var counter = 0;
var fl;
var html_head = [
	'<!DOCTYPE html>',
	'<html lang="ko">',
	'<head>',
		'<meta charset="utf-8">',
		'<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">',
		'<title>동파역전</title>',
		'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">',
		'<link rel="stylesheet" href="dongpa.css">',
		'<style>',
			'.row .guayname {margin: 25px; font-size: 2em; color: #f2f3f2; background-color: #392829;}',
			'.page-break {page-break-before: always;}',
			'.left {font-size: 150%; color: #f2a3c2; padding-top: 5px; padding-bottom: 5px;}',
			'.right {font-size: 100%; color: #f283f2; padding-top: 5px; padding-bottom: 5px;}',
			'.row .gyung {margin: 25px; background-color: #382928;}',
		'</style>',
	'</head>',
	'<body>',
	'<div class="container">'].join('\n')
;
var html_end = [
	'</div>',
	'<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>',
	'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>',
	'<script src="dongpa.js"></script>',
	'</body>',
	'</html>'
].join('\n');

/**
 * read in the whole text and break it into an array
 */

var txt = fs.readFileSync(filePath, 'utf8');
var txtAr = txt.split("\r");
var html_body = [];
/**
 * put lines in an obj
 * --------------------
 * Strange, but the first letter is space from the secon line
 */

function makeObj() {
	var contents = [];
	var tmpObj = {};
	var tmpAr = [];
	var head, tail;
	var line;
	var counter = 0;

	for (var i in txtAr) {
		line = txtAr[i].replace(/^\s+/, '');
		head = line[0]; tail = line.slice(2);

		//- Testing
		// if (counter++ == 250) break;

		//- head
		if (head == 'T') {
			//- New, but if there is one, then push
			if (Object.keys(tmpObj).length) {
				contents.push(tmpObj);
				// cc(contents);
			}

			//- init
			// tmpAr = [];

			//- new obj
			tmpObj = {}; tmpObj.guay = tail; tmpObj.gyung = [];
		}

		//- left
		else if (head == 'L') {
			tmpAr[0] = tail;
		}

		//- right
		else if (head == 'R') {
			tmpAr[1] = tail;
			tmpObj.gyung.push(tmpAr);
			tmpAr = [];
		}
	}

	return contents;
}

function makeHtml(contents) {
	var len = contents.length;
	var i,j;
	var gyung;
	for (i=0; i<len; i++) {
		//- row begin (one guay begins)
		html_body.push('<div class="row" id="guay_' + i + '">');
		html_body.push('\t<div class="col-xs-12">');

		//- guay title
		if (i!=0) html_body.push('\t\t<div class="row guayname page-break">');
		else html_body.push('\t\t<div class="row guayname">');
		html_body.push('\t\t\t<div class="col-xs-12 text-center">');
		html_body.push('\t\t\t\t' + contents[i].guay);
		html_body.push('\t\t\t</div>');
		html_body.push('\t\t</div>');
		//- gyung
		gyung = contents[i].gyung;
		for (j in gyung) {
			html_body.push('\t\t<div class="row gyung">');
			html_body.push('\t\t\t<div class="col-xs-5 left">');
			html_body.push('\t\t\t\t' + gyung[j][0]);
			html_body.push('\t\t\t</div>');
			html_body.push('\t\t\t<div class="col-xs-7 right">');
			html_body.push('\t\t\t\t' + gyung[j][1]);
			html_body.push('\t\t\t</div>');
			html_body.push('\t\t</div>');
		}


		//- row end
		html_body.push('\t</div>')
		html_body.push('</div>');
	}
}

var contents = makeObj();
// cc(contents.length);

makeHtml(contents);
// cc(html_body.length)
// cc(html_body[10746])

cc(html_head);
// cc(html_body.join('\n'));

for (var i=0; i<html_body.length; i++) {
	cc(html_body[i]);
}

cc(html_end);

