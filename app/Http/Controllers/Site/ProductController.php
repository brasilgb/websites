<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index($category = null, $product = null)
    {
        if ($product != null) {
            $post = Post::with('categories')->where('slug', $product)->first();
            return Inertia::render('Site/Posts/index', ['posts' => $post]);
        };
        if ($category != null) {
            $category = Category::with('posts')->with('subCategories')->where('slug', $category)->first();
            return Inertia::render('Site/Categories/index', ['category' => $category]);
        } else {
            $category = Category::where('slug', 'produtos')->where('visiblehome', 0)->with('posts')->with('subCategories')->first();
            $products = Post::where('type', 2)->where('prodfeatured', 1)->get();
            return Inertia::render('Site/Categories/index', ['category' => $category, 'products' => $products]);
        };
    }

    public function show($category)
    {
        $categoryposts = Category::with('posts')->with('subCategories')->where('slug', $category)->first();
        $products = $categoryposts->posts;
        $category = Category::where('slug', 'produtos')->where('visiblehome', 0)->with('posts')->with('subCategories')->first();
        return Inertia::render('Site/Categories/index', ['category' => $category, 'products' => $products, 'query' => true]);
    }
}
