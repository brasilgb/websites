<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Meta;
use App\Models\Category;
use App\Models\Post;
use App\Models\Section;
use App\Models\Settings;

class HomeController extends Controller
{
    public function index() {
        $sections = Section::first();
        $categories = Category::with('posts')->with('subCategories')->where('active', 1)->get();
        $products = Post::where('active', 1)->where('prodfeatured', 1)->get();

        return Inertia::render('Site/Home/index', ['sections' => $sections, 'categories' => $categories, 'products' => $products]);
    }
}
