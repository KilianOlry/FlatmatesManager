<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Task;

new Router([
  'user/:id' => User::class,
  'user/add' => User::class,
  'task/:id' => Task::class
]);
