'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

angular.module('myApp.filters').
filter('linebreak', [function(){
	return function(input) {
		return input.replace(/\n/g, '\n<br>');
	}
}]);