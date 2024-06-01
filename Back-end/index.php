<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Auth;
use App\Controllers\Task;
use App\Controllers\Category;

new Router([
  'user/:id' => User::class,
  'auth/:login' => Auth::class,
  'auth/:register' => Auth::class,
  'task/:id/' => Task::class,
  'category/:id' => Category::class,
  'categorys/' => Category::class
]);
