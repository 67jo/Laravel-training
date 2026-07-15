<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
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
 */
	class Tarefas extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

