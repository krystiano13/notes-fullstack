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

    public function updateNote(Request $request) {
        $validator = Validator::make($request -> all(),[
            'title' =>  ['required'],
            'content' =>  ['required'],
            'user_id' =>  ['required'],
            'id' =>  ['required']
        ]);

        if($validator -> fails()) {
            return json_encode(['err' => 'error']);
        }
        else {
            $fields = $request -> all();
            $fields['title'] = strip_tags($fields['title']);
            $fields['content'] = strip_tags($fields['content']);

            Item::where('user_id','=',$fields['user_id'],'and') -> where('id',$fields['id']) -> update(
                ['title' => $fields['title'], 'content' => $fields['content']]
            );

            return json_encode(['msg' => 'success']);
        }
    }

}
