<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Auth;
use App\Controllers\Task;
use App\Controllers\CategorieTasks;
use App\Controllers\CategorieExpenses;
use App\Controllers\Expense;
use App\Controllers\Home;
use App\Controllers\Message;

new Router([
  # user actions
  'user/:byName' => User::class,
  'user/:id' => User::class,
  'user/:getbymail' => User::class,
  'user/:update' => User::class,
  'user/:granted' => User::class,

  # auth actions
  'auth/:login' => Auth::class,
  'auth/:register' => Auth::class,
  
  # categoryTask actions
  'category/:id' => CategorieTasks::class,
  'categories-tasks/' => CategorieTasks::class,
  
  # task actions
  'task/:id' => Task::class,
  'task/:getAll' => Task::class,
  'task/:add' => Task::class,
  'task/update' => Task::class,
  
  # home actions
  'home/:id' => Home::class,
  'home/:create' => Home::class,

  # categoryExpense actions
  'categories-expenses' => CategorieExpenses::class,
  
  # expense actions
  'expense/:id' => Expense::class,
  'expense/:add' => Expense::class,
  'expense/update' => Expense::class,

  # message actions
  'message/:id' => Message::class,
  'message/:add' => Message::class,
]);
