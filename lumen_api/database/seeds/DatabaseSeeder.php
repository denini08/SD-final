<?php

use Illuminate\Database\Seeder;
use App\Author;
use App\Ad;
use App\CreatedBy;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $anuncio = Ad::create([
            'title' => 'notebook Acer',
            'description' => 'notebook em ótimo estado',
            'contact' => '999-843-797'
        ]);

        $dono = new CreatedBy();
        $dono->name = "Thomás Tabosa";
        $dono->email = "t@upe.br";
        $anuncio->createdBy()->save($dono);

        $anuncio->comments()->create([
            'autor' => 'denini',
            'comment' => 'qual o menor preço?',
        ]);

        $anuncio->save();

    }
}
