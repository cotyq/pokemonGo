 (function(){

	var app = angular.module('pokemon-controllers', []);

	app.controller('PokemonController', ['$http', '$scope', '$rootScope', 'map', function($http, $scope, $rootScope, map){

		this.msg = 0; 

		this.traits = ['Absorbe fuego', 'Cambio color', 'Electricidad estática', 'Levitación', 'Regeneración'];

		/* Crea un pokemon y envia los datos al servidor para que los guarde */
		this.create = function (){
			this.msg = 0; 

			if(jQuery.isEmptyObject($rootScope.usrMarker)){
				this.msg = 4;
				return;
			}

			// Si no ingreso el nombre, muestra el mensaje de error
			if($scope.name == "" || $scope.name == undefined){
				this.msg = 3;
				return;
			}

			// Setea atributos del pokemon
			var newPoke = {};
			newPoke.name = $scope.name;
			newPoke.image = $scope.image;
			newPoke.trait = $scope.trait;

			// Genera una posicion aleatoria y se la setea al pokemon
			newPoke.position = map.generateRandomPosition($rootScope.usrMarker, 200);

			var ctrl = this;
			$http.post('/', newPoke)
			.then(function(response){
				//Succesful response
				if(!response.data.errCode)
				{
					map.setPokemonMarker(newPoke, $rootScope);
					ctrl.msg = 1; 
					ctrl.resetFields();
				}

			},function(response){
				//Error response
				ctrl.msg = 2; 
				console.log("Error");
			});
		};

		this.resetFields = function (){
			$scope.name = "";
			$scope.trait = "";
			document.getElementById("imgInputFile").value = "";
		}

	}]);

})();