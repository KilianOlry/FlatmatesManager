<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\AuthModel;
use App\Models\HomeModel;
use App\Models\UserModel;
use App\Services\FormControl;
use App\Services\QuerySql;

class User extends Controller {
  protected object $user;
  protected object $auth;
  protected object $querySql;
  protected object $home;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();
    $this->auth = new AuthModel();
    $this->formControl = new FormControl;
    $this->querySql = new QuerySql();
    $this->home = new HomeModel();
    parent::__construct($param);
  }

  public function postUser() {
    
    if (in_array('getinformations', $this->params)) {

      $userExist = $this->user->getByTokenAllInformations($this->body[0]);
      
      if ($userExist) {
        
        return $userExist;
      }
    
    } elseif (in_array('getbytoken', $this->params)) {

      return $this->auth->getByToken($this->body[0]);
      
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
    
    $cleanData = $this->formControl->sanitizeInput($this->body);

    $user = $this->user->ifExist($cleanData['userToken']);

    if ($user) {

      $homeId = $this->home->verifyTokenHome($cleanData['homeToken']);

      if ($homeId) {

        $this->user->updateUserJoinHome($user['id'], $homeId);
        
        header("HTTP/1.0 200 OK");
        return ['message' => 'Colocation rejoint !!'];

      }

    }

      header("HTTP/1.0 401 Unauthorized");
      return ['message' => 'Erreur mot de passe incorrect'];

  }
}
