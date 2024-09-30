<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    // protected $hidden = ['pivot'];
    protected $fillable = [
        'name',
        'slug',
        'title',
        'description',
        'thumbnail',
        'featured',
        'module',
        'active',
        'menu',
        'visiblehome',
        'parent'
    ];

    public function posts() {
        return $this->belongsToMany('App\Models\Post', 'category_post', 'category_id', 'post_id');
    }

    public function subCategories() {
        return $this->hasMany(Category::class, 'parent');
    }
}
