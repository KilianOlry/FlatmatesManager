<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategorieExpensesModel;
use App\Services\QuerySql;

class CategorieExpenses extends Controller {
  protected object $category;
  protected object $querySql;

  public function __construct($param) {
    $this->category = new CategorieExpensesModel();
    $this->querySql = new QuerySql();

    parent::__construct($param);
  }

  public function getCategorieExpenses() {

      return $this->querySql->getAll('categorys_expense');
    
  }
}
