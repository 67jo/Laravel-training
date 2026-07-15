<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tarefas;

class TasksController extends Controller
{
    public function index(){
        $tarefas = Tarefas::where('user_id', auth()->id())->get();

        return Inertia::render('dashboard',[
            'tarefas' => $tarefas,
        ]);
    }

    public function create(){
        return Inertia::render('dashboard');
    }

    public function store(Request $request){
        $request->validate([
            'titulo'=> 'required|max:100|string',
            'descricao' => 'nullable|string',
            'concluida' => 'boolean',
            'user_id' => 'integer'
        ]);
        Tarefas::create($request->only('titulo','descricao','concluida', 'user_id'));

        return redirect()->route('dashboard');
    }

    public function edit(Tarefas $tarefa){
        return Inertia::render('dashboard',[
            'tarefas'=> $tarefa
        ]);
    }

    public function update(Request $request, Tarefas $tarefa){
        $validated = $request->validate([
            'titulo'=>'required|string|max:100',
            'descricao'=>'nullable|string',
            'concluida'=>'boolean',
        ]);

        $tarefa->update($validated);

        return redirect()->route('dashboard');
        
    }

    public function show(Tarefas $tarefas){
        return response()->json($tarefas);
    }

    public function destroy(Tarefas $tarefa){
        $tarefa->delete();

        return redirect()->route('dashboard');
    }
}
