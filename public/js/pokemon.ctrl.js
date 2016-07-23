 (function(){

	var app = angular.module('pokemon-controllers', []);

	app.controller('PokemonController', ['$http', '$scope', 'map', function($http, $scope, map){


		/* Create a new pokemon and send it to server */
		this.create = function (){
			var newPoke = {};

			// Set new pokemon attributes
			newPoke.name = $scope.name;


			$http.post('../pokemon', newPoke)
			.then(function(response){
				//Succesful response
				if(!response.data.errCode)
				{
					map.generateRandomPosition(0,0);
				}

			},function(response){
				//Error response
				console.log("Error");

			});
		}

	}]);

})();