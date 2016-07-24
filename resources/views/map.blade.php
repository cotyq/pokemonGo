<!DOCTYPE html>
<html ng-app="pokemonGo">
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    

    <!-- Bootstrap latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
    integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    {!! Html::style('css/map.css') !!}

	</head>
    <body>
     
        <div class="nombreApp"></div>
     
		<!-- Map -->		 
	 	<div id="map_canvas" ng-controller="MapController as map">
	 	</div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" id="create-btn" data-toggle="modal" data-target="#createModal">
          Cargar Pokémon
        </button>

        <!-- Modal -->
        @include('create')
	

    <!-- GMaps -->
    <script type="text/javascript"
        src="http://maps.googleapis.com/maps/api/js?sensor=TRUE&key=AIzaSyCVwaFyisEtteDm3LrIYBfVJdrTS0RQqyc">
    </script> 

     <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script async src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>  

    {!! Html::script('js/app.js') !!}
    {!! Html::script('js/file.drct.js') !!}
    {!! Html::script('js/map.ctrl.js') !!}
    {!! Html::script('js/map.srv.js') !!}
    {!! Html::script('js/pokemon.ctrl.js') !!}

    <!-- Bootstrap -->
    <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" 
            integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous">
    </script>
 
   </body>
</html>