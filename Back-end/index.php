<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Auth;
use App\Controllers\Task;
use App\Controllers\Category;
use App\Controllers\CategoryExpenses;
use App\Controllers\Expense;
use App\Controllers\Home;
use App\Controllers\Message;

new Router([
  'user/:id' => User::class,
  'user/:getbymail' => User::class,
  'user/:update' => User::class,
  'user/:granted' => User::class,
  'auth/:login' => Auth::class,
  'auth/:register' => Auth::class,
  'task/:id' => Task::class,
  'task/:getAll' => Task::class,
  'task/:add' => Task::class,
  'task/:update' => Task::class,
  'category/:id' => Category::class,
  'categorys/' => Category::class,
  'home/:create' => Home::class,
  'home/:join' => Home::class,
  'home/:get' => Home::class,
  'category-expenses/:getAll' => CategoryExpenses::class,
  'expense/:id' => Expense::class,
  'expense/:add' => Expense::class,
  'expense/:update' => Expense::class,
  'message/:id' => Message::class,
  'message/:add' => Message::class,
]);
