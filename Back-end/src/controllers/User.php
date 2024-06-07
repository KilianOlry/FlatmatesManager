<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\AuthModel;
use App\Models\UserModel;

class User extends Controller {
  protected object $user;
  protected object $auth;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();
    $this->auth = new AuthModel();
    parent::__construct($param);
  }

  public function postUser() {
    if (in_array('getbymail', $this->params)) {
      return $this->auth->ifExist($this->body['home_id']);
    } else {
      
      return $this->user->ifExist($this->body['token']);
    }
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

