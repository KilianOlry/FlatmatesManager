<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategorieExpensesModel;

class CategoryExpenses extends Controller {
  protected object $category;

  public function __construct($param) {
    $this->category = new CategorieExpensesModel();

    parent::__construct($param);
  }

  public function getCategoryExpenses() {
    if (in_array('getAll', $this->params)) {
    return $this->category->getAll();
    }
  }
}
