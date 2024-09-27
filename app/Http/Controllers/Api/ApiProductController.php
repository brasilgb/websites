<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class ApiProductController extends Controller
{
    public function index(Request $request)
    {
        $categoryid = $request->category;
        $per_page = $request->per_page;

        $categories = Post::with('categories')
                     ->whereHas('categories', function($query) use($categoryid) { 
                         $query->where('categories.id', $categoryid); 
                     })
                     ->limit($per_page)->get();

        return response()->json([
            "response" => [
                "success" => true,
                "category" => $categories->count() > 0 ? $categories[0]->title : '',
                "data" => $categories
            ],
        ], 201);
    }
}
