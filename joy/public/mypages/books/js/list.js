'use strict';

/**
 * BOOKS >> LIST CONTROLLERS
 */

/**
 * LOGIN PLEASE
 */
if (!window.sessionStorage.token) location.pathname = '/';

/**
 * MODULE
 */

angular.module('myApp', []);

angular.module('myApp')
.
controller('MyController', ['$scope', '$window',
function($scope, $window) {

	$window.listing = function(data) {
		$scope.$apply(function() {
			$scope.hello = data;
		});
	};

	$scope.reading = "히어 아이 앰 프롬 리스트";
	$scope.topScope = window.top.giveRootScope(scopeToShare);
	$scope.updateReading = function() {
		$scope.topScope.reading($scope.reading);
	}

	$scope.reading = "히어 아이 앰 프롬 리스트";
	// $scope.updateReading = function() {
	// 	parent.angular.element($window.frameElement).scope().reading($scope.reading);
	// }


}]);
