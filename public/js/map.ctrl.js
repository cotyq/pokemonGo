 (function(){

	var app = angular.module('map-controllers', []);

	app.controller('MapController', ['$http', '$rootScope', 'map', function($http, $rootScope, map){

		$rootScope.map = {};
		$rootScope.usrMarker = 0;

		// Inicializa mapa y posicion actual, usando el map service
		map.initialize(document.getElementById("map_canvas"), $rootScope);
		map.getCurrentPosition($rootScope);

		// Trae del server los pokemones ya cargados
		$http.get('/getAll')
		.then(function(response){
			var pokemons = response.data.pokemons;

			for (var i = pokemons.length - 1; i >= 0; i--) {
	      		var latLng = {
	        		lat: parseFloat(pokemons[i].lat),
	        		lng: parseFloat(pokemons[i].lng)
	      		};
				pokemons[i].position = latLng;
				map.setPokemonMarker(pokemons[i], $rootScope);
			};

		});

	}]);

})();