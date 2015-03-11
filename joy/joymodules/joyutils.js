function addZero(anumber) {
	return anumber < 10 ? "0" + anumber : anumber
}

exports.getNaljaSigack =function() {
	var dt = new Date();

	var
		dy = dt.getFullYear()
		, dm = addZero(dt.getMonth() + 1)
		, dd = addZero(dt.getDate())
		, dday = dt.getDay()
		, th = addZero(dt.getHours())
		, tm = addZero(dt.getMinutes())
		, ts = addZero(dt.getSeconds())
		,dar
		, tar
;

		dar = [dy, dm, dd];
		tar = [th, tm, ts];

	return dar.join('-') + " (" + dday + ") " + tar.join(':');
}

/*
|-------------------------------
| See if it is between Monday and Friday,
| and between 08:00 and 18:00
|-------------------------------
*/
exports.isFxTime = function() {
	var d = new Date();
	var day = d.getDay();
	var h = d.getHours();
	// return (day >= 1 && day <= 5) && (h >= 8 && h <= 18);
	return true;
}