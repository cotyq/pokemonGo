<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Pokemon;

class PokemonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \View::make('map');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if(empty($request->input('name')))
        {
            // Return error
            return response()->json(['errCode' => 1]);
        }

        $poke = new Pokemon;

        // Se setean los atributos a la clase del modelo.
        $poke->name = $request->input('name');
        $poke->trait = $request->input('trait');

        $poke->image = $request->file('image');
        
        $poke->lat = $request->input('position.lat');
        $poke->lng = $request->input('position.lng');

        // Guardar. Si retorna false, hubo error
        if(!$poke->save())
        {
            // Return error
            return response()->json(['errCode' => 2]);
        }

        // Success
        return response()->json(['errCode' => 0]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Display all resources.
     *
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        $pokemons = Pokemon::all();
        return response()->json(['pokemons' => $pokemons]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
