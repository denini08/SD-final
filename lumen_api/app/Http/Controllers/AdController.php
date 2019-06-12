<?php

namespace App\Http\Controllers;

use App\Ad;
use Illuminate\Http\Request;
use PHPUnit\Framework\MockObject\Stub\Exception;

class AdController extends Controller
{

    /**
     * Exibe todos os anuncios no banco
     */
    public function records()
    {
        return response()->json(Ad::all());

    }

    /**
     * Pesquisa no banco os anuncios que possuem o texto que foi mencionado,
     * no título ou na descrição
     */
    public function find($filter)
    {

        $adsTitle = Ad::where('title', 'like', '%'.$filter.'%')->get();

        $adsDesc = Ad::where('description', 'like', '%'.$filter.'%')->get();

        $ads = $adsTitle->merge($adsDesc);

        return response()->json(['retorno' => $ads, 'strng' => $filter]);

    }

    public function findId($id) {

        return response()->json(Ad::find($id));

    }

    /**
     * Cria o anúncio, infomando o dono
     */
    public function create(Request $request)
    {

        $anuncio = Ad::create($request->all());

        return response()->json($anuncio, 201);
    }

    /**
     * Atualiza o anúncio
     */
    public function update($id, Request $request)
    {
        $anuncio = Ad::findOrFail($id);
        $anuncio->update($request->all());

        return response()->json($anuncio, 200);
    }

    /**
     * Remove o anúncio
     */
    public function delete($id)
    {
        Ad::findOrFail($id)->delete();
        return response()->json([ 'status' => 'deleted'], 200);
    }

    /**
     * Insere um comentário no anúncio
     */
    public function addComment($id, Request $request){

        //dd($request->comment);

        $anuncio = Ad::findOrFail($id);

        $anuncio->comments()->create($request->comment);

        //$anuncio->save();

        return response()->json($anuncio, 201);

    }
}
