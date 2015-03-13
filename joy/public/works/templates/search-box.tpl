<section id="search">
	<span class="input-group">
		<span class="ingput-group-btn">
			<button class="btn btn-info" id="search-count">{{data.length}}</button>
		</span>
		<input ng-model="searchSeed" type="search" results="5" autosave="8" placeholder="Search...">
		<span class="ingput-group-btn">
			<button ng-click="searchDataByCalendar()" class="btn btn-info">기간내 찾기</button>
			<button ng-click="searchData()" class="btn btn-info">찾기</button>
		</span>
		<select>
			<option ng-repeat="(fx, rate) in fxrates" value="{{rate}}" ng-selected="fxshow">{{fx}} {{rate}}</option>
		</select>
		<span ng-if="pending" class="glyphicon glyphicon-refresh"></span>
	</span>
<span>
</section>