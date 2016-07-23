 (function(){

	var app = angular.module('map-controllers', []);

	app.controller('MapController', ['$http', '$scope', 'map', function($http, $scope, map){

		map.initialize(document.getElementById("map_canvas"));
		map.getCurrentPosition();

	}]);

})();