 (function(){

	var app = angular.module('map-services', []);

	app.service('map', function(){

		var mapSrv = {};

		mapSrv.map = {};
		mapSrv.usrMarker = {};

		mapSrv.initialize = function(element){
			// Opciones iniciales del mapa. Se centra en una direccion cualquiera de Santa Fe.
			var mapOptions = {
		      	center: new google.maps.LatLng(-31.63, -60.7),
		      	zoom: 14,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
			
			// Se crea el mapa
		   	mapSrv.map = new google.maps.Map(element, mapOptions);
		}


		mapSrv.getCurrentPosition = function(){

			if (navigator.geolocation) 
		  	{
		  		// Opciones de geolocalizacion.
			  	var geoOptions = {timeout: 10000, enableHighAccuracy: false};
		    	navigator.geolocation.getCurrentPosition(
		    		function(position) 
		    	{
		      		var latLng = {
		        		lat: position.coords.latitude,
		        		lng: position.coords.longitude
		      		};

		    		// Se centra el mapa en la posicion actual del usuario
		      		mapSrv.map.setCenter(latLng);

		      		// Se ubica un marker en esa posicion
		      		mapSrv.usrMarker = new google.maps.Marker({
		      			position: latLng,
		      			map: mapSrv.map,  
		      		});

		    	}, 	function() {
		      		console.log("No es posible geolocalizar");
		    	}, geoOptions);
		  	} 
		  	else 
		  	{
		    	// Browser doesn't support Geolocation
		  		console.log("Geolocalizacion no soportada");
		  	}

		};

		mapSrv.generateRandomPosition = function(center, raduis){
			// 1 grado de latitud corresponde a 110880,33616502823 metros

			var latLng = new google.maps.LatLng(-31.63, -60.7);
			return latLng;
		};



		return mapSrv;

	});

})();