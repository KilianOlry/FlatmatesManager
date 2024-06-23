<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\AuthModel;
use App\Models\UserModel;
use App\Services\FormControl;
use App\Services\IfGranted;
use App\Services\QuerySql;

class User extends Controller {
  protected object $user;
  protected object $auth;
  protected object $querySql;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();
    $this->auth = new AuthModel();
    $this->formControl = new FormControl;
    $this->querySql = new QuerySql();
    parent::__construct($param);
  }

  public function postUser() {

    if (in_array('getbymail', $this->params)) {

      return $this->auth->ifExist($this->body['home_id']);
      
    } elseif (in_array('byName', $this->params)) {

      return $this->user->getUsersWithoutFlatmates($this->body[0]);
    
    }
    
    else {

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
    $ifGranted = new ifGranted();
    
    $cleanData = $this->formControl->sanitizeInput($this->body);
    
    $homeToken = $ifGranted->verifyTokenHome($cleanData['token']);
    $user = $ifGranted->ifExist($cleanData['userEmail']);

    if ($user && $homeToken) {

      header("HTTP/1.0 200 OK");
      return $this->user->updateUserJoinHome($user['id'], $homeToken);

    } else {

      return header("HTTP/1.0 401 Unauthorized");

    }

  }
}
