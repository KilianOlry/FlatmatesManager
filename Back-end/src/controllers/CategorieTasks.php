<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategorieTasksModel;

class CategorieTasks extends Controller {

  protected object $category;

  public function __construct($param) {
    $this->category = new CategorieTasksModel();

    parent::__construct($param);
  }

  public function getCategory() {
    return $this->category->getAll();
  }
}
