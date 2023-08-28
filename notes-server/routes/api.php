<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('/createNote',[ItemController::class,'create']);
Route::put('/updateNote',[ItemController::class, 'updateNote']);
Route::delete('/deleteNote',[ItemController::class,'deleteNote']);
Route::get('/getNotes',[ItemController::class,'getNotes']);