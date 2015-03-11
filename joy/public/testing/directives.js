'use strict';

/* Directives */


angular.module('myApp.directives', ['myApp.services']).
directive("triButton", ['logService', function(logService) {
	return {
		scope: { counter: "=counter" }
		, link: function(scope, element, attrs) {
			element.on("click", function(event) {
				logService.log("Button click: " + event.target.innerText);
				scope.$apply(function() {
					scope.counter++
				});
			});
		}
	}
}])




;
