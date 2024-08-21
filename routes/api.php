<?php

use App\Http\Controllers\Api\ApiCustomerController;
use App\Http\Controllers\Api\ApiOrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/customers", [ApiCustomerController::class, 'store'])->name('customers');
Route::post("/orders", [ApiOrderController::class, 'store'])->name('orders');
