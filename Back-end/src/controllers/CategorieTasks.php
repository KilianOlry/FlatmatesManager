<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategorieTasksModel;
use App\Services\QuerySql;

class CategorieTasks extends Controller {
  protected object $querySql;
  protected object $category;

  public function __construct($param) {
    $this->category = new CategorieTasksModel();
    $this->querySql = new QuerySql();

    parent::__construct($param);
  }

  public function getCategorieTasks() {

    return $this->querySql->getAll('categorys_task');
  
  }
}
