<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index(Request $request) {
        $pages = Post::where('type', 0)->where('active', 1)->where('slug', $request->page)->first();

        return Inertia::render('Site/Pages/index', [ 'pages' => $pages]);
    }
}
