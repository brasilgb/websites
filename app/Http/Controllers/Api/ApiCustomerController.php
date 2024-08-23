<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;

class ApiCustomerController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->clientes;
        foreach ($data as $cliente) {
            User::updateOrCreate(
                [
                    'cpf' => $cliente['cpf']
                ],
                [
                    'cliente_id' => $cliente['id'],
                    'name' => $cliente['nome'],
                    'email' => $cliente['email'],
                    'password' => 12345,
                    "status" => 1,
                    "roles" => "customer"
                ]
            );
        }
        return response()->json([
            "response" => [
                "message" => "Dados dos clientes inseridos sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
}
