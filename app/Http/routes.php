<?php

$router = app('router');

$router->get('/', function () {
    return view('layouts.frontend');
});

$router->group(['prefix' => 'api'], function ($router) {

    $router->post('auth', 'Auth\AuthController@postLogin');

});
