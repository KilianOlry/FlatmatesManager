<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\UserModel;

class User extends Controller {
  protected object $user;
  public $register;

  public function __construct($param) {
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postUser() {
    $this->register = new Register();
    $email = $this->register->verifyEmail($this->body['email']);
    
    if ($email) {
      $passwordHashed = $this->register->hashPassword($this->body['password']);
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
