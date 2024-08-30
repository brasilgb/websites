<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "cliente_id",
        "detalhes",
        "defeito",
        "descorcamento",
        "valorcamento",
        "custo",
        "valservico",
        "valpecas",
        "dtentrada",
        "dtentrega",
        "status"
    ];

    // protected function orders() {
    //     return 
    // }
}
