'use strict';

/**
 * WORKS CONTROLLERS
 */

/**
 * LOGIN PLEASE
 */
if (!window.sessionStorage.token) location.pathname = '/';

angular.module('myApp.controllers', [])
.
controller('MyController', ['$scope', '$window', '$http', '$location', '$sce', '$interval', 'joyUtils', 'ARBAGO',
function($scope, $window, $http, $location, $sce, $interval, joyUtils, ARBAGO) {

	$scope.author = ARBAGO.president;
	$scope.data = [];
	$scope.categoryOptions = [ 'bunho', 'caption', 'cash', 'card', 'mark', 'nalja', 'ref', 'rel', 'sigack', 'yoil' ];
	$scope.fromDate = new Date(joyUtils.sayLastMonth());
	$scope.inorder = 'mark';
	// $scope.selectedorder = 'mark';
	$scope.searchSeed = '';
	$scope.showWork = false;
	$scope.showAll = true;
	$scope.pending = true;
	$scope.toDate = new Date(joyUtils.sayToday());

	$scope.gigansArray = [{label: 'D', value: '1D'}, {label: 'W', value: '1W'}, {label: 'M', value: '1M'}, {label: 'S', value: '3M'}, {label: '6', value: '6M'}, {label: 'Q', value: '1Q'}, {label: 'H', value: '1H'}, {label: 'Y', value: '1Y'}, {label: '3', value: '3Y'}];

	/**
	 * Button Color Change
	 * @param  {Button Object}
	 */
	$scope.isSelected = function(btn) {
        return $scope.selected === btn;
    };

    $scope.getClassWorkMark = function(mark) {
    	var marks = { 'a': 'urgent', 'e': 'held', 'i': 'scheduled', 'o': 'finished', 'u': 'information', 'aa': 'an', 'ee': 'en', 'ii': 'in', 'oo': 'on', 'uu': 'un'};
		return marks[mark];
    }
	/**
	 * SOCKET
	 * @param  {obj} FxRates
 	*/
	$scope.fxshow = "usdts";
	var socket = io.connect();
	socket.on('connect', function() {
		console.log('connected');
	});

	socket.on('fx', function (data) {
		$scope.$apply(function() {
			$scope.fxrates = data.fx;
		});
		console.log($scope.fxrates.usdts);
	});

	socket.on('question', function(data) {
		console.log('question: ' + data.question);
	});

	socket.on('client', function (data) {
		console.log(data.client);
	});

	/**
	 * Calendar Dates
	 */
	$scope.defaultDates = function() {
		$scope.toDate = new Date(joyUtils.sayToday());
		$scope.fromDate = new Date(joyUtils.sayLastMonth());
	};

	/**
	 * WORKS
	 * @param  {obj}
	 */
	$scope.getWorks = function(myData) {
		// console.log("getWorks");
		$scope.pending = true;
		$http.post('/db', angular.toJson(myData))
		.success(function(data) {
			$scope.data = data;
			$scope.pending = false;
			$scope.showAll = true;
			$scope.showWork = false;
		})
		.error(function() {});
	};

	$scope.getWorksByCalendar = function() {
		// console.log("getWorksByCalendar");
		var db = {category: "works 캘린더", table: "works", dbop: "all", rmfield: '', qobj: '', searchobj: ''};
		db.gigan = [$scope.fromDate, $scope.toDate];
		$scope.getWorks({db: db});
	};

	$scope.getWorksByGigan = function(gigan, btn) {
		$scope.selected = btn;
		var db = {category: "works 기간", table: "works", dbop: "all", rmfield: '', qobj: '', searchobj: ''};
		db.gigan = getPeriod($scope.toDate, gigan);
		$scope.getWorks({db: db});
	};

	$scope.getWorksByGigan('1M');

	/*
	|-------------------------------------------
	| SEARCH AND HIGHLIGHT
	|-------------------------------------------
	| http://stackoverflow.com/questions/15519713/highlighting-a-filtered-result-in-angularjs
	 */
	$scope.highlight = function(text, search) {
        if (!search) {
            return $sce.trustAsHtml(text);
        }
      return $sce.trustAsHtml(unescape(escape(text).replace(new RegExp(escape(search), 'gi'), '<span class="highlightedText">$&</span>')));
    };

    $scope.searchData = function() {
    	if (!$scope.searchSeed) return;
		var db = {category: "works 찾기", table: "works", dbop: "all", rmfield: '', qobj: '', gigan: ''};
		db.searchobj = {searchseed: $scope.searchSeed, searchfields: ['caption', 'work']};

		$scope.getWorks({db: db});
    };

    $scope.searchDataByCalendar = function() {
    	if (!$scope.searchSeed) return;
		var db = {category: "works 기간내찾기", table: "works", dbop: "all", rmfield: '', qobj: '', gigan: ''};
		db.searchobj = {searchseed: $scope.searchSeed, searchfields: ['caption', 'work']};
		db.gigan = [$scope.fromDate, $scope.toDate];
		$scope.getWorks({db: db});
    };

	$scope.toggleColorWork = function() {
		alert('Color Work');
	};

/*
|-----------------------------
| NEW WINDOW: WORK EDIT DIALOG
|-----------------------------
| $window: dependency injection (communcation with dialog)
*/

	$scope.getDialogSpecs = function() {
		return {url: "workDialog.html", name: "WorkWindow", features: "left=300,top=200,height=400,width=604"};
	};

//window.open(URL,name,specs,replace)
//	features = "height=305,width=110,alwaysLowered=0,alwaysRaised=0, channelmode=0,dependent=0,directories=0,fullscreen=0, hotkeys=1,location=0,menubar=0,resizable=0,scrollbars=0, status=0,titlebar=0,toolbar=0,z-lock=0";
	$scope.workDialogNew = function(bunho, ref) {
		var specs = $scope.getDialogSpecs();
		var dialogWork;
		var datetime = makeDateTime('times');
		$window.worktmp = {nalja: datetime[0], yoil: datetime[1], sigack: datetime[2], ref: ref};
		$scope.pending = true;
		dialogWork = $window.open(specs.url, specs.name, specs.features);

		$window.workDialogNewOk = function() {
			dialogWork.close();
			$scope.$apply(function() {
				$scope.data.push($window.worktmp.item);
			})
		};

		$window.workDialogExit = function() {
			dialogWork.close();
			disablePending();
		};
	};

	$scope.workDialogOld = function(item) {
		var specs = $scope.getDialogSpecs();
		var dialogWork;
		var dbop = "old";
		$window.worktmp = {bunho: item.bunho};
		$scope.pending = true;

		dialogWork = $window.open(specs.url, specs.name, specs.features);
		$window.workDialogOldOk = function() {
			dialogWork.close();
			$scope.data[$scope.data.indexOf(item)] = $window.worktmp.item;
			disablePending();
		};

		$window.workDialogOldEks = function() {
			dialogWork.close();
			$scope.data.splice( $scope.data.indexOf(item), 1 );
			disablePending();
		};

		$window.workDialogExit = function() {
			dialogWork.close();
			disablePending();
		};
	};

	function disablePending() {
		$scope.$apply(function() {
				$scope.pending = false;
			});
	}

}]);
