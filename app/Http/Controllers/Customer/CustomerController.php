<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Middleware\Customer as MiddlewareCustomer;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = User::with('orders')->where('id', Auth::user()->id)->first();
        return Inertia::render('Customer/Home/index', ['clientes' => $clientes]);
    }

    public function update(Request $request, User $user)
    {
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido!',
            'confirmed' => 'Redigite a senha, devem ser iguais.',
            'email' => 'O campo :attribute deve ser um endereço de email válido!'
        ];
        $request->validate(
            [
                'password' => 'confirmed'
            ],
            $messages,
            [
                'password_confirmation' => 'repita a senha'
            ]
        );
        if ($request->hasfile('avatar')) {
            $fileName = time() . '.' . $request->avatar->extension();
            $request->avatar->move(public_path('storage/images'), $fileName);
            if ($user->avatar && file_exists(public_path('storage/images') . DIRECTORY_SEPARATOR . $user->avatar)) {
                unlink(public_path('storage/images') . DIRECTORY_SEPARATOR . $user->avatar);
            }
        }

        $password = $request->password ? Hash::make($request->password) : $user->password;
        $avatar = $request->hasfile('avatar') ? $fileName : $user->avatar;
        User::where('id', $user->id)->update(['password' => $password, 'avatar' => $avatar]);

        Session::flash('success', 'Seus dados editado com sucesso!');
        // return redirect()->route('users.show', ['user' => $user]);
    }
}
