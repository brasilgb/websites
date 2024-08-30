<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class ApiOrderController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->ordens;

        foreach ($data as $ordem) {
            Order::updateOrCreate(
                [
                    'id' => $ordem['id']
                ],
                [
                    "cliente_id" => $ordem['cliente_id'],
                    "detalhes" => $ordem['detalhes'],
                    "defeito" => $ordem['defeito'],
                    "descorcamento" => $ordem['descorcamento'],
                    "valorcamento" => $ordem['valorcamento']?$ordem['valorcamento']:0,
                    "custo" => $ordem['custo']?$ordem['custo']:0,
                    "valservico" => $ordem['valservico']?$ordem['valservico']:0,
                    "valpecas" => $ordem['valpecas']?$ordem['valpecas']:0,
                    "dtentrada" => $ordem['dtentrada'],
                    "dtentrega" => $ordem['dtentrega'],
                    "status" => $ordem['status']
                ]
            );
        }
        return response()->json([
            "response" => [
                "message" => "Dados das ordens inseridos sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
}
