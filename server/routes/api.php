<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\CoursesController;
use \App\Http\Controllers\Api\MaterialController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources([
    '/courses' => CoursesController::class
]);

Route::post('/material/create', [MaterialController::class, 'add']);
Route::delete('/material/destroy/{id}', [MaterialController::class, 'destroy']);
