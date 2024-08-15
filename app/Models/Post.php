<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand', //marca do produto ou página
        'title', //título da postagem ou página
        'slug',
        'summary', //resumo de conteúdo
        'content', //conteúdo da postagem
        'featured', //imagem destaque
        'prodfeatured',// produto em destaque
        'valnormal', // valor do produto
        'valpromo', // valor promoção
        'social', //ativa ícones mídia social. 0=desativar 1=ativar
        'active', //Torna visualizada no frontend. 0=desativar 1=ativar
        'menu', //Torna visualizada no menu. 0=desativar 1=ativar
        'type', //Caso seja página ou post. 0=página 1=postagem
        'linked' //Adiciona link caso seja postagem. 0=remove 1=adiciona
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
