<?php

namespace App\Http\Controllers;

use App\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{

    public function records()
    {
        return response()->json(Ad::all());

    }

    public function find($filter)
    {

        $adsTitle = Ad::where('title', 'like', '%'.$filter.'%')->get();

        $adsDesc = Ad::where('description', 'like', '%'.$filter.'%')->get();

        $ads = $adsTitle->merge($adsDesc);

        return response()->json($ads);

    }

    public function create(Request $request)
    {

        $anuncio = Ad::create($request->all());

        return response()->json($anuncio, 201);
    }

    public function update($id, Request $request)
    {
        $anuncio = Ad::findOrFail($id);
        $anuncio->update($request->all());

        return response()->json($anuncio, 200);
    }

    public function delete($id)
    {
        Ad::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
