'use strict';

/**
 * WORKS CONTROLLERS
 */

/**
 * LOGIN PLEASE
 */
if (!window.sessionStorage.token) location.pathname = '/';

angular.module('myApp.controllers', []);

angular.module('myApp.controllers')
.
controller('MyController', ['$scope',
function($scope) {

	$scope.hello = "헬로우";
	$scope.hi = "하이";
	$scope.updateListing = function() {
		document.getElementById('iframe-list').contentWindow.listing($scope.hello);
		document.getElementById('iframe-contents').contentWindow.listing($scope.hi);
	}

	window.scopeToShare = $scope;
	$scope.reading = function(data) {
		$scope.$apply(function() {
			$scope.read = data;
		});
	};


}]);
