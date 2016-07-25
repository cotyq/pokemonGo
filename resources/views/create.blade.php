<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ng-controller="PokemonController as pokemonCtrl">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Cargar Pokémon</h4>
      </div>
      <div class="modal-body">

        <form name="createForm">
          <div class="form-group">
            <label>Nombre (requerido)</label>
            <input type="text" class="form-control" placeholder="Nombre" ng-model="name" maxlength="50" required>
          </div>

          <div class="form-group">
            <label for="imgInputFile">Imagen</label>
            <input type="file" id="imgInputFile" file-model="image" accept="image/*">
          </div>

          <div class="form-group">
            <label for="traitSelect">Habilidad</label>
            <select id="traitSelect" class="form-control" ng-model="trait">
              <option ng-repeat="t in pokemonCtrl.traits" value="{[{t}]}">{[{t}]}</option>
            </select>
          </div>

          <div class="alert alert-success" role="alert" ng-show="pokemonCtrl.msg == 1">
            Pokémon guardado correctamente.
          </div>
          <div class="alert alert-danger" role="alert" ng-show="pokemonCtrl.msg == 2">
            Ha ocurrido un error.
          </div>          
          <div class="alert alert-danger" role="alert" ng-show="pokemonCtrl.msg == 3">
            Debe ingresar el nombre.
          </div>
          <div class="alert alert-danger" role="alert" ng-show="pokemonCtrl.msg == 4">
            No es posible guardar debido a que no se encuentra su ubicación actual.
          </div>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Volver al mapa</button>
        <button type="button" class="btn btn-success" ng-click="pokemonCtrl.create()">Guardar</button>
      </div>
    </div>
  </div>
</div>


