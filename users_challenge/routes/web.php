<?php


$router->get('/', function () use ($router) {
    return redirect('api/users');
});

$router->group(['prefix' => 'api'], function() use($router){

    $router->get('/users', 'UsersController@getAllUsers');
    $router->get('/user/{id}', 'UsersController@getUser');
    $router->post('/create','UsersController@createUser');
    $router->put('/update{id}', 'UsersController@updateUser');
    $router->delete('/delete/{id}', 'UsersController@deleteUser');
});