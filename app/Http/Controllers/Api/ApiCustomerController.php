<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class ApiCustomerController extends Controller
{
    public function store(Request $request) {
        $data = $request->all();
        Customer::firstOnCreate(['cpf', $data]);
        return response()->json([
            "response" => [
                "message" => "Dados inseridos sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
}
