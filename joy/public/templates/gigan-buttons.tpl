<div id="gigan">
    <!-- btn click toggle class: refer to http://jsfiddle.net/nw5ndzrt/ -->
	<button ng-repeat="b in gigansArray"
			ng-class="{on : isSelected(b)}"
			ng-click="getWorksByGigan(b.value, b)"
			>{{b.label}}</button>
	<button ng-click="workDialogNew()" class="btn btn-primary">새</button>
	<select id="inorder" ng-model="inorder">
		<option ng-repeat="item in categoryOptions" value="{{item}}" ng-selected="selectedorder">{{item}}</option>
	</select>
	<button ng-click="showAll = !showAll" class="btn btn-primary">SW</button>
	<button ng-click="toggleColorWork()" class="btn btn-primary">CW</button>
	<button class="btn" ng-class="{true: 'btn-primary', false: 'btn-danger'}[!clicked]" ng-click="clicked = !clicked">CW</button>
	<button class="btn btn-primary"><span class="glyphicon glyphicon-search"></span></button>
</div>
