'use strict';

/**
 * WORKS WORKDIALOG
 */

// Declare app level module which depends on filters, and services
angular.module('workDialogApp', [
  // 'ngRoute'
]);

/*
|-----------------------------
| CONTROLLER: workDialogController
|-----------------------------
*/
angular.module('workDialogApp').
controller('workDialogController',
['$scope', '$http', '$window',
function($scope, $http, $window) {
	var dbop;
	if ($window.opener.worktmp.bunho) {
		var db = {};
		var bunho = $window.opener.worktmp.bunho;
		db.dbop = "simple";
		db.sql = "SELECT * FROM ?? WHERE ?? = ?";
		db.inserts = ["works", "bunho", bunho];
		db.category = "works " + db.dbop;

		$http.post('/db', angular.toJson({db: db}))
		.success(function(data) {
			$scope.item = data[0]; // 2015-03-12T15:00:00.000Z
			$scope.item.nalja = new Date(Date.parse($scope.item.nalja));

			//-- 20150313 AngularJS 1.3
			//-- Combine date and time from MySQL into JavaScript Date Object
			var tmp = $scope.item.sigack.split(':');
			$scope.item.nalja.setHours(tmp[0]);
			$scope.item.nalja.setMinutes(tmp[1]);
			$scope.item.nalja.setSeconds(tmp[2]);

			//-- Detach time from date
			$scope.item.sigack = new Date($scope.item.nalja); // Fri Mar 13 2015 20:43:44 GMT+0900 (Korea Standard Time)
			dbop = "old";
		})
		.error(function(err) {alert(err.msg);});
	} else {
		dbop = "new";
		var nalja = new Date();
		var yoil = nalja.getDay();
		var sigack = new Date(nalja); //-- Detach time from date
		var ref = $window.opener.worktmp.ref;
		if (!ref) ref = ''; // When the data are sent, angular.toJson removes 'undefined' field

		$scope.item = {nalja: nalja, sigack: sigack, yoil: yoil, work: '', ref: ref, caption: '', mark: 'o', rel: '', cash: 0, card: 0};
	}

	$scope.ok = function() {
		if (!$scope.item.caption) {
			console.log($scope.item);
			alert("The CAPTION is empty!");
			return;
		}

		db = { category: "works " + dbop, table: "works", dbop: dbop, rmfield: 'bunho', qobj: makeQryObj(), gigan: '', searchobj: '' };

		//-- to MySQL: put into a normal string, then MySQL will save it into ISO type
		db.qobj.nalja = $scope.item.nalja.getFullYear() + "-" + ($scope.item.nalja.getMonth()+1) + "-" + $scope.item.nalja.getDate();
		db.qobj.sigack = $scope.item.sigack.getHours() + ":" + $scope.item.sigack.getMinutes() + ":" + $scope.item.sigack.getSeconds();

		if (dbop === "old") db.updateinfo = { field: 'bunho', value: $scope.item.bunho };
		$http.post('/db', angular.toJson({db: db}))
		.success(function(data) {
			$window.opener.worktmp.item = angular.copy(data[0]);
			if (!$scope.item.bunho) $window.opener.workDialogNewOk();
			else $window.opener.workDialogOldOk();
		})
		.error(function(err) {alert(err.msg);});
	}

	$scope.eks = function() {
		// angular.copy($scope.item, $scope.cloneItem);
		dbop = "eks";
		db = { category: "works " + dbop, table: "works", dbop: dbop, rmfield: 'bunho', qobj: $scope.item, gigan: '', searchobj: '' };
		db.table = "works_eks"; // backup table
		db.eksinfo = { bunho: bunho, table: 'works' };
		$http.post('/db', angular.toJson({db: db}))
		.success(function(data) { $window.opener.workDialogOldEks(); })
		.error(function(err) { alert(err.msg); });
	}

	$scope.exit = function() {
		// $scope.item = angular.copy($scope.cloneItem);
		$window.opener.workDialogExit();
		// $window.close();
	}

	$scope.changeYoil = function(nalja) {
		$scope.item.yoil = calcYoil(nalja);
	}


	function makeQryObj () {
		var tmpObj = {};
		for (var key in $scope.item) tmpObj[key] = $scope.item[key];
		return tmpObj;
	}


}]);


/**
 * 	DIRECTIVES
 */
angular.module('workDialogApp')
.directive("contenteditable", function() {
	return {
		restrict: "A",
		require: "ngModel",
		link: function(scope, element, attrs, ngModel) {

			function read() {
				ngModel.$setViewValue(element.html());
			}

			ngModel.$render = function() {
				element.html(ngModel.$viewValue || "");
			};

			element.bind("blur keyup change", function() {
				scope.$apply(read);
			});
		}
	};
});
