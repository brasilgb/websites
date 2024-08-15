<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Request $request) {

        $categories = Category::with('posts')->with('categories')->with('subCategories')->where('active', 1)->where('slug', $request->category)->get();
        return Inertia::render('Site/Categories/index', [ 'category' => $categories]);
    }
}
