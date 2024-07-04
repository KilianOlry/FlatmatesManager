<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\CategorieExpensesModel;
use App\Models\ExpenseModel;
use App\Models\UserModel;

class Expense extends Controller {
  protected object $expense;
  protected object $category;
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->expense = new ExpenseModel();
    $this->category = new CategorieExpensesModel();
    $this->user = new UserModel;

    parent::__construct($param);
  }

  public function postExpense() {
    $this->formControl = new FormControl();

    if (in_array('add', $this->params)) {

      $cleanBody = $this->formControl->sanitizeInput($this->body);

      $user = $this->user->getByTokenAllInformations($cleanBody['userToken']);

      if ($user) {

        $createdAt = date('Y-m-d');
        $categoryId = $this->category->getByName($cleanBody['category']);
  
        $payorFlatmate = $this->user->getByName($cleanBody['flatmates']);
        
        $stmtExpense = $this->expense->add($cleanBody['price'],
                                           $cleanBody['description'],
                                           $createdAt, $cleanBody['date'],
                                           $categoryId['id'],
                                           $payorFlatmate['id'],
                                           $user['home_id']);
        
        if ($stmtExpense) {
          header("HTTP/1.0 200 OK");
          return ['message' => 'dépense crée avec succès'];
        }
        header("HTTP/1.0 401 Unauthorized");
        return ['message' => 'Une erreur est survenue lors de la création de la dépense'];
      } 
    }
  }

  public function deleteTask() {
    return $this->expense->delete(intval($this->params['id']));
  }

  public function getExpense() {
    if (in_array('getAll', $this->params)) {

      return $this->expense->getAll();
    
    } else {

      $userExist = $this->user->getByTokenAllInformations($this->params['id']);
      if ($userExist) {

        return $this->expense->get($userExist['id']);

      }

    
    }
  }

  public function putExpense() {
    return $this->expense->update($this->body[0]);
  }
}
