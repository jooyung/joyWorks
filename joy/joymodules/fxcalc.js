/*
|-----------------------------------------
| PARSING
|-----------------------------------------
|
	// <p>2015-02-25&nbsp;17:54</p>
	var datepat = /(\d{4}-\d{2}-\d{2}).+?(\d{2}:\d{2})/;

	// <td class='buy'>1119.55</td><td class='sell'>1081.05</td>
	var fxpat = /class='buy'>(\d+(\.\d+)).+?class='sell'>(\d+(\.\d+))/g;

	var match = datepat.exec(fxstr);
	while (match = fxpat.exec(fxstr)) {
		fxobj.buy.push(match[1]);
		fxobj.sell.push(match[2]);
	}
|
*/
var request = require('request');
var joysql = require('./joysql');
var joyUtils = require('./joyUtils');

/*
{ buy: [ '1117.72', '941.08', '1274.40', '1738.68', '187.41', '1109.20', '933.96', '1262.03', '1721.80', '176.90', '1098.50', '924.90', '1249.54', '1704.76', '175.15' ],
  sell: [ '1079.28', '908.72', '1224.68', '1670.84', '166.40', '1087.80', '915.84', '1237.05', '1687.72', '173.40', '1.00', '0.84', '1.14', '1.55', '0.16' ],
  date: '2015-02-25', time: '17:54' }
 */

function FxProcessing(fxstr) {
	// <p>2015-02-25&nbsp;17:54</p>
	var datepat = /(\d{4}-\d{2}-\d{2}).+?(\d{2}:\d{2})/;

	// <td class='buy'>1119.55</td><td class='sell'>1081.05</td>
	var fxpat = /class='buy'>(\d+(\.\d+)).+?class='sell'>(\d+(\.\d+))/g;

	var fxobj = { buy: [], sell: [], date: '', time: '' };

	var match = datepat.exec(fxstr);
	fxobj.date = match[1];
	fxobj.time = match[2];

	while (match = fxpat.exec(fxstr)) {
		fxobj.buy.push(match[1]);
		fxobj.sell.push(match[3]);
	}

	var fxrates = {
		usdts: fxobj.sell[5], jpyts: fxobj.sell[6], eurts: fxobj.sell[7]
		, gbpts: fxobj.sell[8], cnytb: fxobj.buy[9]
		, nalja: fxobj.date, sigack: fxobj.time
	}

	var db = {searchobj: '', gigan: '', };
	db.category = "Fx old";
	db.table = "fxrates";
	db.dbop = "fx";
	db.rmfield = 'funho';
	db.qobj = fxrates;
	db.updateinfo = {field: 'bunho', value: 1};


	// console.log(fxrates);
	//UPDATE fxrates SET usdts:=usdts, jpyts:=jpyts, eurts:=eurts, gbpts:=gbpts, cnytb:=cnytb, nalja:=nalja, sigack:=sigack
	joysql.onequery(db);
}

exports.FxRetrieval = function () {
	var myhost = "community.fxkeb.com";
	var mypath = "/fxportal/jsp/RS/DEPLOY_EXRATE/22056_0.html";
	var myfullHost = "http://community.fxkeb.com/fxportal/jsp/RS/DEPLOY_EXRATE/22056_0.html";
	// console.log(myfullHost);

	// Run between Monday and Friday, and between 08:00 and 18:00
	if (joyUtils.isFxTime()) {
		request(myfullHost, function(err, res, data) {
			if (!err && res.statusCode == 200) {
				FxProcessing(data.replace(/\n/g, ''));
			}
		});
	} else console.log("Not Fx Time Yet");
}

