<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategoryExpensesModel;
use App\Services\FormControl;

class CategoryExpenses extends Controller {
  protected object $category;
  public $formControl;

  public function __construct($param) {
    $this->category = new CategoryExpensesModel();

    parent::__construct($param);
  }

  public function postTask() {

  }

  public function deleteTask() {
    return $this->category->delete(intval($this->params['id']));
  }

  public function getCategoryExpenses() {
    if (in_array('getAll', $this->params)) {
    return $this->category->getAll();
    }
  }
}
