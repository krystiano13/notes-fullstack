<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request) {
       $validator = Validator::make($request -> all(),[
        'username' => ['required', 'min:5', 'max:64', 'unique:users'],
        'password' => ['required', 'min:8']
       ]);

        if($validator->fails()) {
          return json_encode(['err' => 'error']);  
        }

        else {
            $fields = $request -> all(); 
            $fields['password'] = password_hash($fields['password'], PASSWORD_DEFAULT);
            User::create($fields);
            return json_encode(['msg' => 'success']);
        }      
    }
}
