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
    
    if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $this->user->add($this->body);
    }

    return $this->user->getLast();
  }

  public function deleteUser() {
    return $this->user->delete(intval($this->params['id']));
  }

  public function getUser() {
    return $this->user->get(intval($this->params['id']));
  }
}
