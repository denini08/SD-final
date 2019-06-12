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
    $router->get('authors',  ['uses' => 'AuthorController@showAllAuthors']);

    $router->get('authors/{id}', ['as' => 'find', 'uses' => 'AuthorController@showOneAuthor']);

    $router->post('authors', ['uses' => 'AuthorController@create']);

    $router->delete('authors/{id}', ['uses' => 'AuthorController@delete']);

    $router->put('authors/{id}', ['uses' => 'AuthorController@update']);

    /*Ads*/

    $router->get('ads',  ['uses' => 'AdController@records']);

    $router->get('ads/{filter}', ['uses' => 'AdController@find']);

    $router->post('ads', ['uses' => 'AdController@create']);

    $router->delete('ads/{id}', ['uses' => 'AdController@delete']);

    $router->put('ads/{id}', ['uses' => 'AdController@update']);
});
