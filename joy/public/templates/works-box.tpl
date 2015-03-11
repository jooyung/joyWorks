<div id="works row">
	<div ng-repeat="item in data| orderBy: [inorder, 'nalja', 'sigack', 'bunho'] track by item.bunho"
		class="workbox {{ getClassWorkMark(item.mark) }}">
		<div class="item">
			<div class="col-sm-2 smallbox bunhobox">
				<div class="index">{{$index}}</div>
				<div ng-click="workDialogOld(item)" class="bunho">{{item.bunho}}</div>
			</div>
			<div class="col-sm-2 smallbox naljabox">
				<div class="nalja">{{item.nalja | date:'yyyy-MM-dd'}}</div>
				<div class="sigack">{{item.sigack}}</div>
			</div>
			<div class="col-sm-2 smallbox yoilbox">
				<div class="yoil">{{item.yoil}}</div>
				<div class="marks">{{item.mark}}</div>
			</div>
			<div class="col-sm-6 smallbox captionbox">
				<div ng-click="showWork = !showWork" ng-bind-html="highlight(item.caption, searchSeed)" class="caption">{{item.caption}}</div>
				<div class="row">
					<div ng-click="workDialogNew(item.bunho, item.ref)" class="col-sm-3 ref">{{item.ref}}</div>
					<div class="col-sm-3 rel">{{item.rel}}</div>
					<div class="col-sm-3 cash">{{item.cash}}</div>
					<div class="col-sm-3 card">{{item.card}}</div>
				</div>
			</div>
		</div>
		<div class="item">
			<div ng-bind-html="highlight(item.work, searchSeed)" ng-show="showWork" ng-hide="showAll" style="white-space: pre-wrap;" class="work">{{item.work}}</div>
		</div>
	</div>
</div>