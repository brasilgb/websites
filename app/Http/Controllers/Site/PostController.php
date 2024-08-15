<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    
    public function index(Request $request) {
        $post = Post::with('categories')->where('active', 1)->where('slug', $request->post)->first();
        return Inertia::render('Site/Posts/index', ['post' => $post]);
    }
}
