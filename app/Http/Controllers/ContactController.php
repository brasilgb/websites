<?php

namespace App\Http\Controllers;

use App\Mail\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!'
        ];
        $request->validate(
            [
                'name' => 'required',
                'email' => 'email',
                'message' => 'required',
            ],
            $messages,
            [
                'name' => 'nome',
                'email' => 'e-mail',
                'message' => 'mensagem',
            ]
        );
        Mail::to('contato@eplusteutonia.com.br')->send(new ContactUs([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]));
        Session::flash('success', 'E-mail enviado com sucesso!');
        Inertia::render('Site/Posts/index');
    }
}
