(function()
{
	var app = angular.module('pokemonGo', ['pokemon-controllers', 'map-controllers', 'map-services'], ['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }]);

})();