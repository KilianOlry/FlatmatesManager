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

    }
  }

  public function deleteHome() {

    return $this->home->delete(intval($this->params['id']));

  }

  public function getHome() {

    return $this->home->getFlatmates($this->params['id']);
 
  }

  public function createHome($body) {
    $formControl = new FormControl();

    $name = $formControl->cleanInput($body['name']);
    $adress = $formControl->cleanInput($body['adress']);
    $token = $this->generateRandomToken();

    $this->home->add($adress, $name, $token);

  }

  function generateRandomToken(int $length = 6): string {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
  }
