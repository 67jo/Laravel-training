<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [TasksController::class, 'index'])->name('dashboard');
    Route::post('/tasks', [TasksController::class, 'store'])->name('tasks.store');
    Route::put('/tasks/{tarefa}', [TasksController::class, 'update'])->name('tasks.update');
    Route::delete('/tasks/{tarefa}', [TasksController::class, 'destroy'])->name('tasks.destroy');
});

require __DIR__.'/settings.php';
