 (function(){

	var app = angular.module('map-controllers', []);

	app.controller('MapController', ['$http', '$rootScope', 'map', function($http, $rootScope, map){

		$rootScope.map = {};
		$rootScope.usrMarker = {};

		map.initialize(document.getElementById("map_canvas"), $rootScope);

		map.getCurrentPosition($rootScope);

	}]);

})();