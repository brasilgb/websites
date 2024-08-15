<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'logo',
        'state',
        'city',
        'neighborhood',
        'address',
        'phone',
        'whatsapp',
        'instagram',
        'facebook',
        'email',
        'url',
        'opening',
        'metatitle',
        'metakeyword',
        'metadescription',
        'maps',
    ];
}
