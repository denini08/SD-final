<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {

    /*Ads*/

    $router->get('ads',  ['uses' => 'AdController@records']);

    $router->get('ads/{filter}', ['uses' => 'AdController@find']);

    $router->post('ads', ['uses' => 'AdController@create']);

    $router->delete('ads/{id}', ['uses' => 'AdController@delete']);

    $router->put('ads/{id}', ['uses' => 'AdController@update']);

    $router->get('ads/comment/{id}', ['uses' => 'AdController@addComment']);
});
