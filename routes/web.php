<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\RedirectController;
use App\Http\Controllers\Site\ProductController as SiteProductController;
use App\Http\Controllers\Site\ServiceController as SiteServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::prefix('customer')->middleware('auth')->group(function () {
    Route::get('/', [CustomerController::class, 'index']);
});

Route::prefix('admin')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/categories', CategoryController::class);
    Route::resource('/posts', PostController::class);
    Route::resource('/products', ProductController::class);
    Route::resource('/pages', PageController::class);
    Route::resource('/settings', SettingsController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/sections', SectionController::class);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/produtos/categoria/{category?}', [SiteProductController::class, 'show']);
Route::get('/servicos/{category?}/{service?}', [SiteServiceController::class, 'index']);
Route::get('/produtos/{category?}/{product?}', [SiteProductController::class, 'index']);
Route::get('/{slug}', [RedirectController::class, 'index'])->where('slug', '^((?!login|register|admin).)*$')->name('slug');
Route::post('/sendmail', [ContactController::class, 'send'])->name('sendmail');



require __DIR__ . '/auth.php';
