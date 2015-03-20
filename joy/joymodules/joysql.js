var
	mysql = require('mysql')
	, joyutil = require('./joyutils')
	, io = require('./joysocket')
	, fxrates = {usdts: 0, eurts: 0, gbpts: 0, jpyts: 0, cnytb: 0}
	, fxrates_old = JSON.stringify(fxrates)
;
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

/**
 * E X P O R T S
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
 * ---
 * inserts: not for db, but for '?'s in sql
 */

function simpleQuery(dbobj, res) {
	var sql = mysql.format(dbobj.sql, dbobj.inserts); // console.log(sql);
	conn.query(sql, function(err, result) {
		console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
		if (err) console.log("joySQL Error: simple: " + err);
		else if (dbobj.category == "fx onetime") io.informFxRates(result[0]);
		else if (res) res.end(JSON.stringify(result[0]));
		else return result;
	});
}

/**
 * Fetch updated data right after "old" update
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
 * ---
 * Ater a new work is saved, then update the ref and retrieve it
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
			if (err) console.log("joySQL Error: work double: " + err);
			// else ;
		});
	}

	sql = "SELECT * FROM ?? WHERE ?? = ?";
	inserts = ['works', 'bunho', bunho];
	sql = mysql.format(sql, inserts);

	// Retrieve
	conn.query(sql, function(err, result) {
		console.log(joyutil.getNaljaSigack() + " Works New Double Retrieval");
		if (err) console.log("joySQL Error: work double2: " + err);
		else res.end(JSON.stringify(result));
	})
}

/**
 * All
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
	var query = conn.query(qstr, function(err, result) {
		if (err) console.log("joySQL Error: all: " + err);
		else {
			// console.log(query.sql);
			if (!res) return; // for non-web queries
			else res.end(JSON.stringify(result));
			console.log(joyutil.getNaljaSigack() + " " + category);
		}
	});
}

/**
 * New
 */

function newQuery(dbobj, res) {
	var qstr;
	var tmparray = [];
	qstr = "INSERT INTO " + dbobj.table + " SET ?";
	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];
	var query = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " joySQL Error: new: " + err);
		else {
			// console.log(query.sql);
			if (!res) return; // for non-web queries
			if (dbobj.category=="works new") workDoubleTime(result.insertId, dbobj.qobj.ref, res);
			else res.end(JSON.stringify(result.insertId));
			console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
		}
	});
}

/**
 * Old
 */

function oldQuery(dbobj, res) {
	var qstr;
	var tmparray = [];

	tmparray.push("UPDATE " + dbobj.table + " SET ?");
	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];

	tmparray.push("WHERE " + dbobj.updateinfo.field + "='" + dbobj.updateinfo.value + "'");

	qstr = tmparray.join(" ");

	var query = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " joySQL Error: old: " + err);
		else {
			// console.log(query.sql);
			console.log(joyutil.getNaljaSigack() + " " + dbobj.category);
			if (dbobj.dbop === "fx") {
				// console.log(dbobj.qobj);
				// server.fxrates = dbobj.qobj;

				// SOCKET when different
				fxrates = dbobj.qobj;
				if (!compareFxRates()) {
					console.log("Fx Changed")
					// exports.fxrates = fxrates;
					fxrates_old = JSON.stringify(fxrates);
					// console.log(dbobj.qobj);
					io.informFxRates(fxrates);
				}
			}
			if (!res) return; // for non-web queries
			// else res.end(JSON.stringify(result));
			else getUpdatedByBunho(dbobj, res);
		}
	});

	// console.log(qry);
}

/**
 * compare FxRates
 */

function compareFxRates() {
	return fxrates.usdts != 0 ? JSON.stringify(fxrates) == fxrates_old : true;
}

/**
 * Eks
 */

function eksQuery(dbobj, res) {
	var qstr;
	var tmparray = [];

	if (dbobj.rmfield) delete dbobj.qobj[dbobj.rmfield];
	qstr = "INSERT INTO " + dbobj.table + " SET ?";
	console.log(qstr);

	// First, backup the old one
	var query = conn.query(qstr, dbobj.qobj, function(err, result) {
		if (err) console.log(dbobj.category + " eksQuery joySQL Error: eks: " + err);
		else {
			if (!res) return; // for non-web queries
		}
	});
	// console.log(query.sql);

	// Lastly, eks
	var db = {};
	db.sql = "DELETE FROM ?? WHERE ?? = ?";
	db.inserts = [dbobj.eksinfo.table, "bunho", dbobj.eksinfo.bunho];
	db.category = dbobj.category;
	simpleQuery(db, res);
}
