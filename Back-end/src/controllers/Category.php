<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\CategoryModel;
use App\Services\FormControl;

class Category extends Controller {
  protected object $category;
  public $formControl;

  public function __construct($param) {
    $this->category = new CategoryModel();

    parent::__construct($param);
  }

  public function postTask() {
    $this->formControl = new FormControl();
    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);
    
      if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $this->category->add($firstname, $lastname, $email, $passwordHashed);

      return $this->category->getLast();
    } else {
      return false;
    }
  }

  public function deleteTask() {
    return $this->category->delete(intval($this->params['id']));
  }

  public function getCategory() {
    return $this->category->get(intval($this->params['id']));
  }
}
