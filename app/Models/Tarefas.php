<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Tarefas extends Model
{
    protected $fillable = ["id", "titulo", "descricao", "concluida", "user_id"];
}
