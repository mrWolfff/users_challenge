<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    private $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getAllUsers()
    {
        return $this->user->get()->toJson();
    }

    public function getUser($id)
    {
        return $this->user->findOrFail($id);
    }

    public function createUser(Request $request)
    {
        $this->user->create($request->all());

        return response()->json(['data' => ['message' => 'Usuário foi criado com sucesso!']]);
    }

    public function updateUser($id, Request $request)
    {
        $course = $this->user->find($id);

        $course->update($request->all());

        return response()->json(['data' => ['message' => 'Usuário foi atualizado com sucesso!', '' ]]);
    }


    public function deleteUser($id)
    {
        $course = $this->user->find($id);

        $course->delete();

        return response()
            ->json(['data' => [ 'message' => 'Usuário foi removido com sucesso!']]);
    }
}
