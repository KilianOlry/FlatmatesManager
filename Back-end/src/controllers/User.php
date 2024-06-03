<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\UserModel;

class User extends Controller {
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postUser() {
    return $this->user->ifExist($this->body['token']);
  }

  public function deleteUser() {
    return $this->user->delete(intval($this->params['id']));
  }

  public function getUser() {
    return $this->user->get(intval($this->params['id']));
    }

    public function putUser() {
      return $this->user->update();
    }
  }

