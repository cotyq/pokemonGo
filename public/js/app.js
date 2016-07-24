(function()
{
	var app = angular.module('pokemonGo', ['pokemon-controllers', 'map-controllers', 'map-services', 'input-file-directives'], 
		['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }]);

})();