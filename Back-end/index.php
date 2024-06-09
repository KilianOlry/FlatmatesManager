<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Auth;
use App\Controllers\Task;
use App\Controllers\Category;
use App\Controllers\Home;

new Router([
  'user/:id' => User::class,
  'user/:getbymail' => User::class,
  'user/:update' => User::class,
  'user/:granted' => User::class,
  'auth/:login' => Auth::class,
  'auth/:register' => Auth::class,
  'task/:id/' => Task::class,
  'task/:getAll' => Task::class,
  'task/:add' => Task::class,
  'category/:id' => Category::class,
  'categorys/' => Category::class,
  'home/:create' => Home::class,
  'home/:join' => Home::class,
  'home/:get' => Home::class
]);
