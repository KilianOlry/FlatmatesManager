<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\UserModel;

class User extends Controller {
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postUser() {
    $this->formControl = new FormControl();
    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);
    
    if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $this->user->add($firstname, $lastname, $email, $passwordHashed);

      return $this->user->getLast();
    } else {
      return false;
    }
  }

  public function deleteUser() {
    return $this->user->delete(intval($this->params['id']));
  }

  public function getUser() {
    return $this->user->get(intval($this->params['id']));
  }
}
