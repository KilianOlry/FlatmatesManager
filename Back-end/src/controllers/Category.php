<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategoryModel;

class Category extends Controller {

  protected object $category;

  public function __construct($param) {
    $this->category = new CategoryModel();

    parent::__construct($param);
  }

  public function getCategory() {
    return $this->category->getAll();
  }
}
