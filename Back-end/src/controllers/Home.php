<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\HomeModel;
use App\Services\FormControl;

class Home extends Controller {
  protected object $home;
  public $formControl;

  public function __construct($param) {
    $this->home = new HomeModel();

    parent::__construct($param);
  }

  public function postHome() {
    $formControl = new FormControl();
    if (in_array('create', $this->params)) {
      
      $name = $formControl->cleanInput($this->body['name']);
      $adress = $formControl->cleanInput($this->body['adress']);
      $token = bin2hex($adress);

      $this->home->add($adress, $name, $token);
    } else {
      return 'je suis personne';
    }
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

