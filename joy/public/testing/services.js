'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.
value('version', '0.1')
.
constant('ARBAGO', {
	"startupDate": '1998-09-01'
	, "president": 'Jooyung YOON'
})
.
factory('joyUtils', [function() {

	// function addZero(anumber) {
	// 	return anumber < 10 ? "0" + anumber : anumber
	// }

	return {

		sayToday: function() {
			var d = new Date;
			return [ d.getFullYear(), addZero(d.getMonth()+1), addZero(d.getDate()) ].join("-");
		}
		, sayLastMonth: function() {
			var d = new Date;
			return [ d.getFullYear(), addZero(d.getMonth()), addZero(d.getDate()) ].join("-");
		}
		, say1Month: function(aDate) {
			
		}
	}
}])
.
factory("logService", function() {
	var messageCount = 0;
	return {
		log: function(msg) {
			if (!messageCount) messageCount++;
			else console.log("(LOG + " + messageCount++ + ") " + msg);
		}
	};
})


;