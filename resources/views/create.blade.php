<!DOCTYPE html>
<html ng-app="pokemonGo">
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    

    <!-- Bootstrap latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
    integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	</head>
  <body>
     
    <div class="container">
      <div class="header clearfix">
        <h3 class="text-muted">Cargar Pokémon</h3>
      </div>

      <form ng-controller="PokemonController as pokemonCtrl">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" class="form-control" placeholder="Nombre" ng-model="name">
        </div>

        <!--<div class="form-group">
          <label for="exampleInputFile">Imagen</label>
          <input type="file" id="exampleInputFile">
        </div>-->
        <button type="submit" class="btn btn-primary" ng-click="pokemonCtrl.create()">Crear</button>
      </form>
    </div>


    <!-- GMaps -->
    <script type="text/javascript"
        src="http://maps.googleapis.com/maps/api/js?sensor=TRUE&key=AIzaSyCVwaFyisEtteDm3LrIYBfVJdrTS0RQqyc">
    </script> 

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script async src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>  

    {!! Html::script('js/app.js') !!}
    {!! Html::script('js/map.ctrl.js') !!}
    {!! Html::script('js/map.srv.js') !!}
    {!! Html::script('js/pokemon.ctrl.js') !!}

    <!-- Bootstrap -->
    <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" 
            integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous">
    </script>    

  </body>
</html>