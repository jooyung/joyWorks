var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//
var
	path = require('path')
	, startDir = "c:/Users/joy/Music/Elvis/Adios Lincoln-2014"
;
var html_head = [
	'<!DOCTYPE html>',
	'<html lang="ko">',
	'<head>',
		'<meta charset="utf-8">',
		'<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">',
		'<title>joy Books</title>',
		'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">',
	'</head>',
	'<body>',
	'<div class="container-fluid">'].join('\n')
;
var html_end = [
	'</div>',
	'<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>',
	'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>',
	'</body>',
	'</html>'
].join('\n');

for(var i in html_head)
	cc(i)