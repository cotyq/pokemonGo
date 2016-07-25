 (function(){

	var app = angular.module('map-services', []);

	app.service('map', function(){

		var mapSrv = {};

		/* Inicializa el mapa */
		mapSrv.initialize = function(element, $rootScope){

			// Opciones iniciales del mapa. Se centra en una direccion cualquiera de Santa Fe.
			var mapOptions = {
		      	center: new google.maps.LatLng(-31.63, -60.7),
		      	zoom: 16,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP,
		      	mapTypeControlOptions: {
			        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			        position: google.maps.ControlPosition.RIGHT_TOP
			    },
		    };
			
			// Se crea el mapa
		   	$rootScope.map = new google.maps.Map(element, mapOptions);
		};

		/* Setea un marker en el mapa, correspondiente al pokemon que se pasa como parametro. */
		mapSrv.setPokemonMarker = function(pokemon, $rootScope){
      		
      		// Se ubica el marker en la posicion
      		var marker = new google.maps.Marker({
      			position: pokemon.position,
      			map: $rootScope.map,  
      		});


      		// Infowindow (ventana informativa)
  		  	var infowindow = new google.maps.InfoWindow({
		    	content: '<h4>' + pokemon.name + '</h4>'
		  	});
		  	
		  	// Al hacer click en el marker se muestra la informacion
		  	marker.addListener('click', function() {
    			infowindow.open($rootScope.map, marker);
  			});

		  	// Icono del marker
      		marker.setIcon(window.location.href+'img/Pokeball.png');
		}

		/* Obtiene la posicion actual del usuario y pone un marker en el lugar */
		mapSrv.getCurrentPosition = function($rootScope){

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
		      		$rootScope.map.setCenter(latLng);

		      		// Se ubica un marker en esa posicion
		      		$rootScope.usrMarker = new google.maps.Marker({
		      			position: latLng,
		      			map: $rootScope.map,  
		      		});

		      		console.log("Geolocalizacion. Hecho.");

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

		/* Genera una posicion aleatoria en un circulo determinado por su centro y su radio (en metros) */
		mapSrv.generateRandomPosition = function(center, raduis){

			// Genero angulo random entre 0 y 2PI (rad)
			var angle = Math.random() * 2 * Math.PI;

			// Genero radio aleatorio entre 0 y el radio pasado como parametro
			// 1 grado de latitud corresponde a 110880,33616502823 metros, por lo tanto se convierte el radio
			var rad = Math.random() * (raduis / 110880.33616502823);

			// Desplazamiento en metros que tendra la nueva posicion con respecto al centro
			var despLat = Math.cos(angle) * rad;
			var despLng = Math.sin(angle) * rad;

			// Se crea la nueva posicion con los desplazamientos correspondientes
			var latLng = {
        		lat: center.getPosition().lat() + despLat,
        		lng: center.getPosition().lng() + despLng
      		};

			return latLng;
		};

		return mapSrv;

	});

})();