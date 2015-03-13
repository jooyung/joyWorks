<section id="calendar">
	<input ng-model="fromDate" type="date" class="calendar">
	<input ng-model="toDate" type="date" class="calendar">
	<span class="btn btn-group">
		<button ng-click="defaultDates()" class="btn-sm btn-info">기본</button>
		<button ng-click="getWorksByCalendar()" class="btn-sm btn-info">가져오기</button>
	</span>
</section>