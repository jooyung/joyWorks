var mysql = require('mysql');
var joyutil = require('./joyutils');
var server = require('../JOYServer');
var fxrates = {usdts: 0, eurts: 0, gbpts: 0, jpyts: 0, cnytb: 0};
var fxrates_old = JSON.stringify(fxrates);
exports.fxrates = fxrates;
/*
|-------------------------------
|   M Y S Q L   C O N N E C T
|-------------------------------
*/
var conn = mysql.createConnection({
	host: "localhost"
	, user: "yjy"
	, password: "111"
	, database: "tzangi"
	// , charset: "utf8"
});

conn.connect(function(err) {
	if (err) {
		console.log("Problem with MySQL " + err);
	} else {
		console.log("Connected to MySQL");
	}
});

/*
|----------------------------
| CUSTOM ESCAPE QUERY FORMAT
|-----------------------------
| DO NOT USE THIS WHEN USING NODE-MYSQL PROVIDED ? OPTION
|----------------------------------
| see WORKS: NEW
| INSERT INTO works SET nalja=:nalja, sigack=:sigack, yoil=:yoil, ref=:ref
| , caption=:caption, work=:work, mark=:mark", req.body
*/
// conn.config.queryFormat = function (query, values) {
//   if (!values) return query;
//   return query.replace(/\:(\w+)/g, function (txt, key) {
//     if (values.hasOwnProperty(key)) {
//       return this.escape(values[key]);
//     }
//     return txt;
//   }.bind(this));
// };

/*
|-------------------------------------
| MySql Escape String
|-------------------------------------
|http://stackoverflow.com/questions/7744912/making-a-javascript-string-sql-friendly
| Maybe not necessary to use because node-mysql provides escape() service by using ? option
*/
// function mysql_real_escape_string (str) {
//     return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
//         switch (char) {
//             case "\0": return "\\0";
//             case "\x08": return "\\b";
//             case "\x09": return "\\t";
//             case "\x1a": return "\\z";
//             case "\n": return "\\n";
//             case "\r": return "\\r";
//             case "\"":
//             case "'":
//             case "\\":
//             case "%": return "\\"+char; // prepends a backslash to backslash, percent,
//                                   // and double/single quotes
//         }
//     });
// }

// var _escapeString = function (val) {
//   val = val.replace(/[\0\n\r\b\t\\'"\x1a]/g, function (s) {
//     switch (s) {
//       case "\0":
//         return "\\0";
//       case "\n":
//         return "\\n";
//       case "\r":
//         return "\\r";
//       case "\b":
//         return "\\b";
//       case "\t":
//         return "\\t";
//       case "\x1a":
//         return "\\Z";
//       case "'":
//         return "''";
//       case '"':
//         return '""';
//       default:
//         return "\\" + s;
//     }
//   });

//   return val;
// };

/*
|-----------------------------------
| make a query string from an object
|-----------------------------------
| "usdts:=usdts, jpyts:=jpyts, eurts:=eurts, gbpts:=gbpts, cnytb:=cnytb, nalja:=nalja, sigack:=sigack"
*/
// function queryObj2objStr (qObj, sJoiner) {
// 	var sAr = [];
// 	var joiner = sJoiner || ", ";
// 	for (var fld in qObj)  {
// 		if (fld !== "$$hashKey") sAr.push(fld + "=:" + fld );
// 	}
// 	return sAr.join(joiner);
// }

// function queryObj2str (qObj, sJoiner) {
// 	var sAr = [];
// 	var joiner = sJoiner || ", ";
// 	for (var fld in qObj)  {
// 		if (fld !== "$$hashKey" && fld) sAr.push(fld + "='" + mysql_real_escape_string(qObj[fld]) + "'");;
// 	}
// 	var str = sAr.join(joiner); //console.log(str);
// 	return str;
// }

/*
|-----------------------------------
| SEARCH STRING
|-----------------------------------
| "(caption LIKE '%" + $scope.searchSeed + "%' OR work LIKE '%" + $scope.searchSeed + "%')"
*/
function searchobj2str (sObj) {
	var sAr = []
		, searchseed = sObj.searchseed
		, searchfields = sObj.searchfields
	;
	for (var i in searchfields) sAr.push(searchfields[i] + " LIKE '%" + searchseed + "%'");
	return "(" + sAr.join(" OR ") + ")";
}

/*
|-----------------------------------
| E X P O R T S
|-----------------------------------
*/
exports.conn = conn;

exports.onequery = function(dbobj, res) {
	switch (dbobj.dbop) {
		case "fx": oldQuery(dbobj, res);
			break;
		case "all": allQuery(dbobj, res);
			break;
		case "simple": simpleQuery(dbobj, res);
			break;
		case "new": newQuery(dbobj, res);
			break;
		case "old": oldQuery(dbobj, res);
			break;
		case "eks": eksQuery(dbobj, res);
			break;
		default: allQuery(dbobj, res);
			break;
	}
};

/**
 * used by works dialog
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
function simpleQuery(dbobj, res) {
	var sql = mysql.format(dbobj.sql, dbobj.inserts);console.log(sql);
	conn.query(sql, function(err, result) {
		console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
		if (err) console.log("joySQL Error: " + err);
		else res.end(JSON.stringify(result));
	});
}

/**
 * Fetch updated data right after "old" update
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 * @description bunho is removed in "old" query
 */
function getUpdatedByBunho(dbobj, res) {
	var db = {};
	db.sql = "SELECT * FROM ?? WHERE ?? = ?";
	db.inserts = [dbobj.table, "bunho", dbobj.updateinfo.value];
	db.category = dbobj.category;
	simpleQuery(db, res);
}

/**
 * Special and individual function only for works
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 * @description Ater a new work is saved, then update the ref and retrieve it
 */
function workDoubleTime(bunho, ref, res) {
	var sql, inserts;

	if (!ref) {
		sql = "UPDATE ?? SET ?? = ? WHERE bunho = ?";
		inserts = ['works', 'ref', bunho, bunho];
		sql = mysql.format(sql, inserts);

		// Update the ref
		conn.query(sql, function(err, result) {
			console.log(joyutil.getNaljaSigack() + " Works New Double Update");
			if (err) console.log("joySQL Error: " + err);
			// else ;
		});
	}

	sql = "SELECT * FROM ?? WHERE ?? = ?";
	inserts = ['works', 'bunho', bunho];
	sql = mysql.format(sql, inserts);

	// Retrieve
	conn.query(sql, function(err, result) {
		console.log(joyutil.getNaljaSigack() + " Works New Double Retrieval");
		if (err) console.log("joySQL Error: " + err);
		else res.end(JSON.stringify(result));
	})
}

/*
|----------------------------------
|   S O C K E T . I O
|----------------------------------
*/
// var io = require('socket.io').listen(server);
// io.on('connection', function (socket) {
// 	socket.emit('news', { hello: 'world' });
// 	socket.on('my other event', function (data) {
// 		console.log(data);
// 	});
// });

/*
|-----------------------------------
| F U N C T I O N S
|-----------------------------------
*/
function allQuery(dbobj, res) {
	var category = dbobj.category
		, rmfield = dbobj.rmfield
		, qobj = dbobj.qobj
		, searchobj = dbobj.searchobj
		, gigan = dbobj.gigan
	;

	var qstr;
	var tmparray = [];

	tmparray.push("SELECT * FROM " + dbobj.table);

	// CONDITIONALS
	if (gigan) {
		tmparray.push("WHERE (nalja >= '" + gigan[0] + "' AND nalja <= '" + gigan[1] + "')");
	}

	if (searchobj) {
		if (gigan) tmparray.push("AND");
		else tmparray.push("WHERE");
		tmparray.push(searchobj2str(searchobj));
	}

	qstr = tmparray.join(" ");
	// console.log(qstr);

	conn.query(qstr, function(err, result) {
		if (err) console.log("joySQL Error: " + err);
		else {
			if (!res) return; // for non-web queries
			else res.end(JSON.stringify(result));
			console.log(joyutil.getNaljaSigack() + " " + category);
		}
	});
}

function newQuery(dbobj, res) {
	var qstr;
	var tmparray = [];
	qstr = "INSERT INTO " + dbobj.table + " SET ?";
	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];

	var qry = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " joySQL Error: " + err);
		else {
			if (!res) return; // for non-web queries
			if (dbobj.category=="works new") workDoubleTime(result.insertId, dbobj.qobj.ref, res);
			else res.end(JSON.stringify(result.insertId));
			console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
		}
	});

	 // console.log(qry);
}

function oldQuery(dbobj, res) {
	var qstr;
	var tmparray = [];

	// tmparray.push("UPDATE");
	// tmparray.push(dbobj.table);
	tmparray.push("UPDATE " + dbobj.table + " SET ?");
	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];
	// if (dbobj.qobj.hasOwnProperty('$$hashKey')) delete dbobj.qobj['$$hashKey'];
	// tmparray.push(queryObj2str(dbobj.qobj));

	// CONDITIONALS
	// if (dbobj.gigan) {
	// 	tmparray.push("WHERE (nalja >= '" + dbobj.gigan[0] + "' AND nalja <= '" + dbobj.gigan[1] + "')")
	// }

	// if (dbobj.searchobj) {
	// 	if (dbobj.gigan) tmparray.push("AND");
	// 	else tmparray.push("WHERE");
	// 	tmparray.push(searchobj2str(dbobj.searchobj));
	// }

	// tmparray.push("WHERE")
	tmparray.push("WHERE " + dbobj.updateinfo.field + "='" + dbobj.updateinfo.value + "'");

	qstr = tmparray.join(" ");
	// console.log(qstr);

	var qry = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " joySQL Error: " + err);
		else {
			console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
			if (dbobj.dbop === "fx") {
				// console.log(dbobj.qobj);
				// server.fxrates = dbobj.qobj;

				// SOCKET when different
				fxrates = dbobj.qobj;
				if (!compareFxRates()) {
					console.log("Fx Changed")
					exports.fxrates = fxrates;
					fxrates_old = JSON.stringify(fxrates);
					// console.log(dbobj.qobj);
					server.informFxRates();
				}
			}
			if (!res) return; // for non-web queries
			// else res.end(JSON.stringify(result));
			else getUpdatedByBunho(dbobj, res);
		}
	});

	// console.log(qry);
}

function compareFxRates() {
	return fxrates.usdts != 0 ? JSON.stringify(fxrates) == fxrates_old : true;
}

function eksQuery(dbobj, res) {
	var qstr;
	var tmparray = [];

	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];
	qstr = "INSERT INTO " + dbobj.table + " SET ?";
	console.log(qstr);

	// First, backup the old one
	var query = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " eksQuery joySQL Error: " + err);
		else {
			if (!res) return; // for non-web queries
		}
	});
	console.log(query.sql);

	// Lastly, eks
	var db = {};
	db.sql = "DELETE FROM ?? WHERE ?? = ?";
	db.inserts = [dbobj.eksinfo.table, "bunho", dbobj.eksinfo.bunho];
	db.category = dbobj.category;
	simpleQuery(db, res);
}
