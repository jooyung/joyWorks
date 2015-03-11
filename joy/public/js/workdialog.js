'use strict';

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
			$scope.item = data[0];
			$scope.item.nalja = $window.opener.convertDate($scope.item.nalja);
			dbop = "old";
		})
		.error(function(err) {alert(err.msg);});
	} else {
		dbop = "new";
		var nalja = $window.opener.worktmp.nalja;
		var yoil = $window.opener.worktmp.yoil;
		var sigack = $window.opener.worktmp.sigack;
		var ref = $window.opener.worktmp.ref;
		if (!ref) ref = ''; // When the data are sent, angular.toJson removes 'undefined' field

		$scope.item = {nalja: nalja, sigack: sigack, yoil: yoil, work: '', ref: ref, caption: '', mark: 'o', rel: '', cash: 0, card: 0};
	}

	$scope.ok = function() {
		//$window.opener.item = $scope.item;//not necessary because it is sync auto
		// if (!item.caption) revertItem($scope.item, $scope.cloneItem);
		if (!$scope.item.caption) {
		console.log($scope.item);
			alert("The CAPTION is empty!");
			return;
		}
		db = { category: "works " + dbop, table: "works", dbop: dbop, rmfield: 'bunho', qobj: $scope.item, gigan: '', searchobj: '' };
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

	// console.log("Items: " , $window.opener.item);
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
