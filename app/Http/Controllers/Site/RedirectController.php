<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RedirectController extends Controller
{
    public function index(Request $request)
    {
        $post = Post::with('categories')->where('slug', $request->slug)->first();
        $category = Category::with('posts')->with('subCategories')->where('slug', $request->slug)->first();
        if ($post != null) {
            return Inertia::render('Site/Posts/index', ['posts' => $post]);
        };
        if ($category != null) {
            return Inertia::render('Site/Categories/index', ['category' => $category]);
        };
    }
}
