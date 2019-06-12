<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use \GuzzleHttp\Client;

class Controller extends BaseController
{

    public function get() {

        $client = new Client();
        $request = $client->get("http://localhost:8000/api/authors");
        $response = $request->getBody()->getContents();
        echo "<pre>";
        print_r($response);
        exit;

    }
}
