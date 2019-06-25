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

    $router->get('findAll',  ['uses' => 'AdController@records']);

    $router->get('find/{filter}', ['uses' => 'AdController@find']);

    $router->get('meus/{id}', ['uses' => 'AdController@findByOwner']);

    $router->get('view/{id}', ['uses' => 'AdController@findId']);

    $router->post('insert', ['uses' => 'AdController@create']);

    $router->delete('delete/{id}', ['uses' => 'AdController@delete']);

    $router->put('ads/{id}', ['uses' => 'AdController@update']);

    $router->post('/comment/{id}', ['uses' => 'AdController@addComment']);

    $router->get('/isAlive', ['uses' => 'AdController@isAlive']);
});
