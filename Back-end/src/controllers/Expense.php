<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\TaskModel;
use App\Models\CategoryExpensesModel;
use App\Models\ExpenseModel;
use App\Models\UserModel;

class Expense extends Controller {
  protected object $expense;
  protected object $category;
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->expense = new ExpenseModel();
    $this->category = new CategoryExpensesModel();
    $this->user = new UserModel;

    parent::__construct($param);
  }

  public function postExpense() {
    $this->formControl = new FormControl();

    if (in_array('add', $this->params)) {
      $price = $this->body['price'];
      $message = $this->formControl->cleanInput($this->body['description']);
      $createdAt = date('Y-m-d');
      $dateLimit = $this->formControl->cleanInput($this->body['date']);
      $category = $this->formControl->cleanInput($this->body['category']);
      $categoryId = $this->category->getByName($category);
      $user = $this->user->ifExist($this->body['tokenUser']);
      $flatmate = $this->formControl->cleanInput($this->body['flatmates']);
      $workerflatmate = $this->user->getByName($flatmate);
      return $this->expense->add($price, $message, $createdAt, $dateLimit, $categoryId['id'], $workerflatmate['id'], $user['home_id']);
    
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
