<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Task;
use App\Controllers\Category;

new Router([
  'user/:id' => User::class,
  'user/auth' => User::class,
  'user/add' => User::class,
  'task/:id/' => Task::class,
  'category/:id' => Category::class,
  'categorys/' => Category::class
]);
