<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\TaskModel;
use App\Models\CategoryModel;
use App\Models\ExpenseModel;
use App\Models\UserModel;

class Expense extends Controller {
  protected object $expense;
  protected object $category;
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->expense = new ExpenseModel();
    $this->category = new CategoryModel();
    $this->user = new UserModel;

    parent::__construct($param);
  }

  public function postExpense() {
    return 'bonjour';
    $this->formControl = new FormControl();

    if (in_array('add', $this->params)) {
      $message = $this->formControl->cleanInput($this->body['description']);
      $createdAt = date('Y-m-d H:i:s');
      $dateLimit = $this->formControl->cleanInput($this->body['date']);
      $priority = $this->formControl->cleanInput($this->body['priority']);
      $category = $this->formControl->cleanInput($this->body['category']);
      $categoryId = $this->category->getByName($category);
      $user = $this->user->ifExist($this->body['tokenUser']);
      $flatmate = $this->formControl->cleanInput($this->body['flatmates']);
      $workerflatmate = $this->user->getByName($flatmate);
      return $this->expense->add($message, $createdAt, $dateLimit, $priority, $categoryId['id'], $workerflatmate['id'], $user['home_id']);
    
    } elseif (in_array('update', $this->params)) {
      return $this->expense->update($this->body[0]);

    }


  }

  public function deleteTask() {
    return $this->expense->delete(intval($this->params['id']));
  }

  public function getTask() {
    if (in_array('getAll', $this->params)) {
      return $this->expense->getAll();
    } else {
      return $this->expense->get(intval($this->params['id']));
    }
  }
}
