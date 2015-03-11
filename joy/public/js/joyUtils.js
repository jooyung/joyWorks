/*
|--------------------------------------
|  U T I L S
|--------------------------------------
| Load this script in main and call the utils from other scrips as top.function();
*/

/*
|--------------------------------------
| ARRAY
|------------------
| http://stackoverflow.com/questions/784012/javascript-equivalent-of-phps-in-array
| Checks if an array includes a value or an array
|
| TESTS
	var a = [['p','h'],['p','r'],'o'];
	if(inArray(['p','h'], a)) {
	    alert('ph was found');
	}
	if(inArray(['f','i'], a)) {
	    alert('fi was found');
	}
	if(inArray('o', a)) {
	    alert('o was found');
	}
	// results:
	// alerts 'ph' was found
	// alerts 'o' was found
*/
function arrayCompare(a1, a2)
{
	if (a1.length != a2.length) return false;
	var length = a2.length;
	for (var i = 0; i < length; i++)
	{
		if (a1[i] !== a2[i]) return false;
	}

	return true;
}

function inArray(needle, haystack)
{
	var length = haystack.length;
	for(var i = 0; i < length; i++)
	{
		if(typeof haystack[i] == 'object')
		{
			if(arrayCompare(haystack[i], needle)) return true;
		}
		else
		{
			if(haystack[i] == needle) return true;
		}
	}

	return false;
}

/*
|---------------------------------------
| IN_ARRAY 2
|---------------------------------------
| Checks a value against either an array or an object
*/
function in_array (needle, haystack, argStrict) {
	// Checks if the given value exists in the array
	//
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/in_array
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: vlado houba
	// +   input by: Billy
	// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
	// *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
	// *     returns 1: true
	// *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
	// *     returns 2: false
	// *     example 3: in_array(1, ['1', '2', '3']);
	// *     returns 3: true
	// *     example 3: in_array(1, ['1', '2', '3'], false);
	// *     returns 3: true
	// *     example 4: in_array(1, ['1', '2', '3'], true);
	// *     returns 4: false

	var key = '', strict = !! argStrict;

	if (strict)
	{
		for (key in haystack)
			if (haystack[key] === needle) return true;
	}
	else
	{
		for (key in haystack)
			if (haystack[key] == needle) return true;
	}

	return false;
}

/*
|--------------------------------------
| IN ARRAY DOUBLE
|--------------------------------------
| My Own: checks if each value in an array exists as a key in an object
*/
function keyInObject(mAr, mObj)
{
	var valA = keyO = '';

	for (valA in mAr) if (!mObj.hasOwnProperty(valA)) return false;

	return true;
}

/*
|--------------------------------------
| NUMBER: FORMAT
|------------------
| http://www.mredkj.com/javascript/numberFormat.html
*/
function addCommas(nStr)
{
	var reg = /(^[+-]?\d+)(\d{3})/;
	n = String(nStr);

	while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

//	if (n == 0) n = '';
//	return (n == 0) ?  '' : n;
	return n;
}

/*
|--------------------------------------
| DATES
|--------------------------------------
| !!! OBSOLETE AND DEPRECATED !!!
|--------------------------------------
| NALJA: If a nalja is given at the second parameter, then set the date to it
*/
function makeDateTime(gooboon, nalja)
{
	var dt = new Date();
	if (nalja)
	{
		var nAr = breakDateString(nalja);
		dt.setFullYear(nAr[0], nAr[1] - 1, nAr[2]);
	}

	var
		dy = dt.getFullYear(),
		dm = Right( '0' + (dt.getMonth()+1), 2),
		dd = Right( '0' + dt.getDate(), 2),
		dday = dt.getDay(),
		tH = Right( '0' + dt.getHours(), 2),
		tM = Right( '0' + dt.getMinutes(), 2),
		tS = Right( '0' + dt.getSeconds(), 2),

		dar, tar, newDate;

	switch (gooboon)
	{
		case 'bunho':
			dar = [dy, dm, dd, tH, tM, tS];
			newDate = dar.join('');
			break;
		case 'period':
			newDate = [dy, dm, dd];
			break;
		case 'calendardefaults':
			newDate = [dy, dm, dd];
			break;
		case 'fx':
			newDate = [dt.getHours(), dday];
			break;
		case 'times':
			dar = [dy, dm, dd];
			tar = [tH, tM, tS];
			newDate = [dar.join('-'), dday, tar.join(':')];
			break;
	}

	return newDate;
}

function breakDateString(nalja)
{
	return nalja.split('-');
}

function calcYoil(nalja)
{
	var nar = breakDateString(nalja);
	var d = new Date(nar[0], nar[1]-1, nar[2]); //*Conver to JavaScript date

	return d.getDay();
}

function addZero(anumber) {
	return anumber < 10 ? "0" + anumber : anumber
}

/*
|-----------------------------------
| Convert ISO format date to the normal
|-------------------------------------
| MySQL outputs date in ISO format
| No problem when shouwing the date in the broswer
| But the problem begins when the date is shown in input type = date
| When the ISO date is saved in MySQL, the string is truncated
| and the saved date gets to be one day shorter
*/
function convertDate(date) {
	// var date = "2015-02-26T15:00:00.000Z";
	var d = new Date(Date.parse(date));
	var dAr = [d.getFullYear(), addZero(d.getMonth() + 1), addZero(d.getDate())];
	return dAr.join("-");
}

/*
Firstly, get the numbers by the calculation of plus and minus of periods
Then Adjust the months if they are over number 12, and accordingly its years
The date is always 1st and the last day of the month
 */
/*
http://www.w3schools.com/jsref/jsref_setmonth.asp
JavaScript setMonth() Method

Parameter	Description
month	Required. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
----------------------------------------------------
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last day of the previous month
-1 will result in the day before the last day of the previous month

If the month has 31 days:
32 will result in the first day of the next month

If the month has 30 days:
32 will result in the second day of the next month
 */
function getPeriod(nalja, gigan) {
	var nar = breakDateString(nalja);
	var year = fromYear = toYear = parseInt(nar[0]);
	var month = fromMonth = toMonth = parseInt(nar[1]) - 1; // Conver to JavaScript Month
	var date = parseInt(nar[2]);
	var fromDate = 1;
	var toDate = 0; // *0 returns the last day of the last month. goes algon with toMonth
	var yoil;
	var ndFrom, ndTo; // new Date

	switch (gigan) {
		case "1D":
			fromDate = toDate = date;
			break;
		case "1W":
			yoil = calcYoil(nalja);
			fromDate = date - yoil;
			toDate = fromDate + 6;
			break;
		case "1M":
			toMonth += 1;
			break;
		case "3M":
			fromMonth -= 1;
			toMonth += 2; // *this goes along with doDate=0
			break;
		case "6M":
			fromMonth -= 2;
			toMonth += 4; // *
			break;
		case "1Q":
			fromMonth = month >= 9 ? 9 : month >= 6 ? 6 : month >= 3 ? 3 : 0
			toMonth = fromMonth + 3
			break;
		case "1H":
			fromMonth = month >= 6 ? 6 : 0
			toMonth = fromMonth + 6
			break;
		case "1Y":
			fromMonth = 0;
			toMonth = 12;
			break;
		case "3Y":
			fromYear -= 1;
			toYear += 1;
			fromMonth = 0;
			toMonth = 12;
			break;
		default:
			break;
	}

	ndFrom = getDateString(fromYear, fromMonth, fromDate);
	ndTo = getDateString(toYear, toMonth, toDate);

	return [ndFrom, ndTo];
}

function getDateString(year, month, date) {
	var d = new Date(year, month, date);
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();

	return [addZero(year), addZero(month+1), addZero(date)].join("-"); // Conver to display date
}

/*
|--------------------------------------
| MAKE DIV
|--------------------------------------
*/
function makeOneDiv(fwin, felem, fclass, fid, fvalue)
{
	var elem = fwin.document.createElement(felem);
	if (fclass) elem.className = fclass;
	if (fid) elem.id = fid;
	if (fvalue) elem.innerHTML = fvalue;
	return elem;
}

/*
|--------------------------------------
| IFRAME
|--------------------------------------
| BYDATEARRANGE: Arrange the fetched works in date order
| iframe is said non-standard in strice XML, so make it dynamic creating
|
| Create valid xHTML-Strict, Search-Friendly iFrames Using jQuery
| http://www.andrewpwatson.com/posts/create-valid-xhtml-strict-search-friendly-iframes-using-jquery
| The issue: We have an iFrame we want to use on our page but:
|
| Iframes are not valid xHTML Stict Markup.
| Iframes are SEO bottlenecks.
|
| The Solution:
| Send the markup to the browser using valid code, then use javascript to dynamically insert the iFrame code after the page is downloaded
| Because most search bots don’t parse JavaScript, they receive the original valid markup with SEO-friendly urls to the iFrame content.
*/
// $(document).ready( function()
// {
// 	makeIframes($('a.iframe'));
// });

// function makeIframes(objDom)
// {
// 	// create xhtml strict friendly iframe
// 	var myID = '';
// 	var myScroll = '';

// 	$(objDom).each(function(i)
// 	{
// 		myID = this.id;
// 		myScroll = 'no';
// 		myUrl = this.href;
// 		$(this).replaceWith("<iframe src='" + myUrl + "' id='" + myID + "' name='" + myID + "'  frameborder='0' scrolling='" + myScroll + "'></iframe>");
// 	});
// }

/*
|-----------------------------
|	STRING
|-----------------------------
*/
String.prototype.left = function(n)
{
    return this.substring(0, n);
}

/*
|--------------------------------------
| LEFT, RIGHT
| ---------------
| http://www.devx.com/tips/Tip/15222
*/

function Left(str, n)
{
	return str.left(n);
//	if (n <= 0) return "";
//	else if (n > String(str).length) return str;
//	else return String(str).substring(0,n);
}

function Right(str, n)
{
    if (n <= 0) return "";
    else if (n > String(str).length) return str;
    else
    {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

/*
|--------------------------------------
| COPY TO CLIPBOARD
| ---------------
*/
function copyToClipboard(s)
{
	if( window.clipboardData && clipboardData.setData )
	{
		clipboardData.setData("Text", s);
	}
	else
	{/*
		// You have to sign the code to enable this or allow the action in about:config by changing
		user_pref("signed.applets.codebase_principal_support", true);
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

		var clip = Components.classes['@mozilla.org/widget/clipboard;[[[[1]]]]'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip) return;

		// create a transferable
		var trans = Components.classes['@mozilla.org/widget/transferable;[[[[1]]]]'].createInstance(Components.interfaces.nsITransferable);
		if (!trans) return;

		// specify the data we wish to handle. Plaintext in this case.
		trans.addDataFlavor('text/unicode');

		// To get the data from the transferable we need two new objects
		var str = new Object();
		var len = new Object();

		var str = Components.classes["@mozilla.org/supports-string;[[[[1]]]]"].createInstance(Components.interfaces.nsISupportsString);

		var copytext=meintext;

		str.data=copytext;

		trans.setTransferData("text/unicode",str,copytext.length*[[[[2]]]]);

		var clipid=Components.interfaces.nsIClipboard;

		if (!clip) return false;

		clip.setData(trans,null,clipid.kGlobalClipboard);*/
	}
}
