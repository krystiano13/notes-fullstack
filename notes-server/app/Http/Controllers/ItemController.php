<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ItemController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request -> all(),[
            'title' => ['required'],
            'content' => ['required'],
            'user_id' => ['required']
        ]);

        if($validator -> fails()) {
            return json_encode(['err' => 'error']);
        }

        else {
            $fields = $request -> all();
            $fields['title'] = strip_tags($fields['title']);
            $fields['content'] = strip_tags($fields['content']);

            Item::create($fields);
            return json_encode(['msg' => 'success']);
        }
    } 
}
