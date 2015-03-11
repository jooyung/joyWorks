'use strict';

// Declare app level module which depends on filters, and services
angular.module('workDialogApp', [
  // 'ngRoute'
]);


/*
|-----------------------------
| CONTROLLER: workDialogController
|-----------------------------
| sync with parent: $window.opener.data
| reference type linking, it syncs automatically
*/

angular.module('workDialogApp').
controller('workDialogController',
['$scope', '$window',
function($scope, $window) {
	$scope.item = $window.opener.item;

	var cloneItem = JSON.parse( JSON.stringify( $scope.item ) );
	function revertItem(objFrom, objTo) {
		for (var attr in objFrom) objTo[attr] = objFrom[attr];
	}

	$scope.ok = function() {
		//$window.opener.item = $scope.item;//not necessary because it is sync auto
		$window.opener.dialogWorkOk();
	}

	$scope.exit = function() {
		revertItem(cloneItem, $scope.item);
		$window.close();
	}

	$scope.changeYoil = function(nalja) {
		$scope.item.yoil = calcYoil(nalja);
	}

	// console.log("Items: " , $window.opener.item);

}]);