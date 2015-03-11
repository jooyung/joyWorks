'use strict';

/* Filters */

angular.module('myApp.filters', [])

.
filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
    }
 }])

.
filter('linebreak', [function(){
	return function(input) {
		return input.replace(/\n/g, '\n<br>');
	}
}])

.
filter('labelCase', function() {
	return function(value, reverse) {
		if (angular.isString(value)) {
			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
			return (reverse ? intermediate[0].toLowerCase()  + intermediate.substr(1) : intermediate[0].toUpperCase() + intermediate.substr(1));
		} else {
			return value;
		};
	};
});