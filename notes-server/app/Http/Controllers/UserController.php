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
        'password' => ['required', 'min:8'],
        'password2' => ['required', 'min:8']
       ]);

        $fields = $request -> all(); 

        if($validator->fails() || $fields['password'] !== $fields['password2']) {
          return json_encode(['err' => 'error']);  
        }

        else {
            $fields['password'] = password_hash($fields['password'], PASSWORD_DEFAULT);
            User::create($fields);
            return json_encode(['msg' => 'success']);
        }      
    }

    public function login(Request $request) {
        $validator = Validator::make($request -> all(),[
            'username' => ['required'],
            'password' => ['required']
        ]);

        $fields = $request -> all();        
        $result = User::where('username','=',$fields['username'])->first('password');

        if($result -> count() <= 0 || $validator -> fails()) {
            return json_encode(['err' => 'error']);
        }
        else {
            if(password_verify($fields['password'],$result['password'])) {
                return json_encode(['msg' => 'success']);
            }

            else {
                return json_encode(['err' => 'error']);
            }
        }
    }
}
