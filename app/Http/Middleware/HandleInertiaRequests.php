<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Post;
use App\Models\Settings;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->get('success')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'datasite' => [
                'config' => Settings::orderBy('id', 'DESC')->first(),
                'allcat' => Category::get(),
                'cat' => Category::where('active', 1)->where('menu', 1)->with('subCategories')->orderBy('id', 'DESC')->get(),
                'pag' => Post::where('active', 1)->where('menu', 1)->where('type', 0)->orderBy('id', 'DESC')->get(),
                'userexist' => DB::table('users')->where('id', '>', 1)->exists()
            ],
        ];
    }
}
