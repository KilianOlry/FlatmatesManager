<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\HomeModel;
use App\Services\FormControl;
use App\Services\IfGranted;

class Home extends Controller {
  protected object $home;
  public $formControl;

  public function __construct($param) {
    $this->home = new HomeModel();
    
    parent::__construct($param);
  }

  public function postHome() {
    if (in_array('create', $this->params)) {
      
      $this->createHome($this->body);

    } elseif (in_array('join', $this->params)) {

      $this->joinHome($this->body);
    
    } elseif (in_array('get', $this->params)) {
      return $this->home->getMembersHome($this->body['home_id']);
    }
  }

  public function joinHome () {
    $formControl = new FormControl();
    $ifgrantedService = new ifGranted();
    // CLEAN INPUT
    $email = $formControl->verifyEmail($this->body['userEmail']);
    $token = $formControl->cleanInput($this->body['token']);
    // CHECK IF EXIST
    $homeToken = $ifgrantedService->verifyTokenHome($token);
    $userAdmin = $ifgrantedService->ifExist($email);

    if ($userAdmin && $homeToken) {
      $this->home->join($userAdmin['id'], $homeToken['id']);
    } else {
      return header("HTTP/1.0 401 Unauthorized");
    }
  }

  public function createHome($body) {
    $formControl = new FormControl();

    $name = $formControl->cleanInput($body['name']);
    $adress = $formControl->cleanInput($body['adress']);
    $token = bin2hex($adress);

    $this->home->add($adress, $name, $token);
    return $this->home->getLast();
  }

  public function deleteHome() {
    return $this->home->delete(intval($this->params['id']));
  }

  public function getHome() {

    return $this->home->get(intval($this->params['id']));
  }


    public function putHome() {
      return $this->home->update();
    }
  }

