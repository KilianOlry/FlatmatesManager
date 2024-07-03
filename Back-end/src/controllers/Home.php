<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\AuthModel;
use App\Models\HomeModel;
use App\Services\FormControl;

class Home extends Controller {
  protected object $home;
  protected object $auth;

  public function __construct($param) {
    $this->home = new HomeModel();
    $this->auth = new AuthModel();
    
    parent::__construct($param);
  }

  public function postHome() {
    if (in_array('create', $this->params)) {

      return $this->createHome($this->body);

    }
  }

  public function deleteHome() {

    return $this->home->delete(intval($this->params['id']));

  }

  public function getHome() {

    return $this->home->getFlatmates(intval($this->params['id']));
 
  }

  public function createHome(array $body) {
    $formControl = new FormControl();

    $cleanBody = $formControl->sanitizeInput($body);
    $token = $this->generateRandomToken();
  
    $tokenFind = $this->auth->getByToken($cleanBody['userToken']);

    if ($tokenFind) {

      $homeCreated = $this->home->add($cleanBody['adress'], $cleanBody['name'], $token);
      
      if ($homeCreated) {
        header("HTTP/1.0 200 OK");
        return ['message' => 'Colocation crée avec succès'];
      }

    }
    
    header("HTTP/1.0 401 Unauthorized");
    return ['message' => 'Une erreur est survenue lors de la création'];

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
