var cc = console.log;
var cr = function() {
	console.log("\r");
}

//---------------------------//
var pAr = [
	[/[가-힣]/g, Math.random().toString(36).substr(2, 5)]
	, [/C#/g, 'CSharp']
	, [/[^a-zA-Z\d]/g, '_']
	, [/_+/g, '_']
	, [/^_|_$/g, '']
];


var testar = [
	"__C#_Net_#3: _#FrameWork__", "1Contents at A Glance", "!@#$%* ABC def:123", "1장 Vim의 배경과 설"
	];

function doRegex3(astring) {
	var tmp = astring;
	for (var i in pAr) {
		tmp = tmp.replace(pAr[i][0], pAr[i][1]);
		// cc("tmp: ", tmp);
	}

	// cc();

	return tmp.toLowerCase();
}

function convertHangel(HString) {
	var tmp = [];
	for (var i in HString) {
		if (/[가-힣]/.test(HString[i])) tmp.push(HString[i].charCodeAt());
		else tmp.push(HString[i]);
	}
	return tmp.join('');
}

function doRegex(astring) {
	var tmp = astring;
	for (var i in pAr) {
		tmp = tmp.replace(/[^가-힣a-zA-Z\d]/g, '_');
		tmp = tmp.replace(/([가-힣])/g, "$1");
		tmp = tmp.replace(/C#/g, 'CSharp');
		tmp = tmp.replace(/_+/g, '_');
		tmp = tmp.replace(/^_|_$/g, '');
		tmp = tmp.toLowerCase();
	}

	return tmp;
}


//- main
var filename;
for (var i in testar) {
	filename = doRegex(testar[i]);
	cc(filename);
}