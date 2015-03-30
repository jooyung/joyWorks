angular.module('myApp', []);

angular.module('myApp')
.
controller('MyController', ['$scope',
function($scope) {

	window.listing = function(data) {
		$scope.$apply(function() {
			$scope.hello = data;
		});
	};



}]);
