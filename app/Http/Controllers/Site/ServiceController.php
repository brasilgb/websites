<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index($category = null, $service = null)
    {
        if ($service != null) {
            $post = Post::with('categories')->where('slug', $service)->first();
            return Inertia::render('Site/Posts/index', ['posts' => $post]);
        };
        if ($category != null) {
            $category = Category::with('posts')->with('subCategories')->where('slug', $category)->first();
            return Inertia::render('Site/Categories/index', ['category' => $category]);
        } else {
            $category = Category::with('posts')->with('subCategories')->where('slug', 'servicos')->first();
            return Inertia::render('Site/Categories/index', ['category' => $category]);
        };
    }
}
