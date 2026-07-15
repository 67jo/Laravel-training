<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [TasksController::class, 'index'])->name('dashboard');
    Route::post('/dashboard', [TasksController::class, 'store'])->name('tasks.store');
    Route::put('/dashboard', [TasksController::class, 'update'])->name('tasks.update');
});

require __DIR__.'/settings.php';
