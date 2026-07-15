<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property string $titulo
 * @property string $descricao
 * @property int $concluida
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property int $user_id
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereConcluida($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereDescricao($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereTitulo($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Tarefas whereUserId($value)
 * @mixin \Eloquent
 */
class Tarefas extends Model
{
    protected $fillable = ["id", "titulo", "descricao", "concluida", "user_id"];
}
