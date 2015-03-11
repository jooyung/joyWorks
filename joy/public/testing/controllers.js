'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
controller('MyController', ['$scope', '$http', 'joyUtils', 'ARBAGO', 'logService',
function($scope, $http, joyUtils, ARBAGO, logService) {
	$scope.author = ARBAGO.president;
	$scope.toDate = joyUtils.sayToday();

//------------------------------------------------------------------------------//
	$scope.products = [
		{ name: "Apples", category: "Fruit", price: 1.20, expiry: 10}
		,{ name: "Bananas", category: "Fruit", price: 2.42, expiry: 7}
		,{ name: "Pears", category: "Fruit", price: 2.02, expiry: 6}
		,{ name: "Lighter", category: "Electric", price: 1.0, expiry: 55}
	];

	$scope.testData = {
		cities: ["London", "New York", "Paris"]
		, totalClicks: 0
	};

	$scope.$watch('testData.totalClicks', function(newVal) {
		logService.log("Total click count: " + newVal);
	});

	$scope.loadData = function() {

	};

//------------------------------------------------------------------------------//

	// $scope.$watch('testData.totalClicks', function(newVal) {
	// 	console.log("Total click count: " + newVal);
	// });

	$scope.getWorks = function(myData) {
		console.log("getWorks");

		$http({
			method: "post"
			, url: '/works'
			, data: JSON.stringify(myData)
		}).success(function(data) {
			$scope.data = data;
		});
	};

	$scope.getWorksByGigan = function(gigan) {
		console.log("getWorksByGigan");
		var dates = getPeriod($scope.toDate, gigan);
		var tmpQStr = [
			"SELECT"
			, "bunho, DATE_FORMAT(nalja, '%Y-%m-%d') as nalja, sigack, yoil, ref, caption, work, mark"
			, "FROM tzangi.works"
			, "WHERE"
			, "nalja >= '" + dates[0] + "' AND nalja <= '" + dates[1] + "'"
		];

		var qStr = tmpQStr.join(" ");
		var myData = { qStr: qStr };
		$scope.getWorks(myData);
	};




}]);

