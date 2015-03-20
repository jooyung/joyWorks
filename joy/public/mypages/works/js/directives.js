'use strict';

/**
 * WORKS DIRECTIVES
 */
angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
		elm.text(version);
    };
}])
.directive('calendarBox', [function() {
	return {
		templateUrl: "templates/calendar-box.tpl"
		, restrict: "A"
		, replace: true
	}
}])
.
directive('categoryFilter', [function() {
	return {
		templateUrl: "templates/category-filter-options.tpl"
		, restrict: "A"
		, replace: true
	}
}])
.
directive('fxBox', [function() {
	return {
		templateUrl: "templates/fx-box.tpl"
		, restrict: "A"
		, replace: true
	}
}])
.
directive('giganButtons', [function() {
	return {
		templateUrl: "templates/gigan-buttons.tpl"
		, restrict: "A"
		, replace: true
	}
}])
.directive('loginBox', [function() {
	return {
		templateUrl: "templates/login-box.tpl"
		, restrict: 'A'
		, replace: true
	}
}])
.directive('newpostButton', [function() {
	return {
		templateUrl: "templates/newpost-button.tpl"
		, restrict: 'A'
		, replace: true
	}
}])
.directive('paginationBox', [function() {
	return {
		templateUrl: "templates/pagination-box.tpl"
		, restrict: 'A'
		, replace: true
	}
}])
.directive('searchBox', [function() {
	return {
		templateUrl: "templates/search-box.tpl"
		, restrict: 'A'
		, replace: true
	}
}])
.directive('worksBox', [function() {
	return {
		templateUrl: "templates/works-box.tpl"
		, restrict: 'A'
		, replace: true
	}
}])

;