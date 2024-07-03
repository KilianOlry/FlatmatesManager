<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\AuthModel;

class Auth extends Controller {
  protected object $auth;
  public $formControl;

  public function __construct($param) {
    $this->auth = new AuthModel();
    $this->formControl = new FormControl();
    parent::__construct($param);
  }

  public function postAuth() {

      if (in_array('login', $this->params)) {
        
        return $this->login($this->body);

      } else if (in_array('register', $this->params)) {
        
        return $this->register($this->body);
      
      }
  }

  public function login() {

    $email = $this->formControl->verifyEmail($this->body['email']);

    if ($email) {

      $user = $this->auth->ifExist($email);

      if ($user) {

        if (password_verify($this->body['password'], $user['password'])) {
          header("HTTP/1.0 200 OK");
          return ['token' => $user['token']];

        } else {

          header("HTTP/1.0 401 Unauthorized");
          return ['message' => 'Email ou Mot de passe incorect'];
        }
      }
      else{
        header("HTTP/1.0 401 Unauthorized");
        return ['message' => 'Email ou Mot de passe incorect'];
      }
    }
  }

  public function register() {
    $email = $this->formControl->verifyEmail($this->body['email']);
    $cleanBody = $this->formControl->sanitizeInput($this->body);

    if ($email) {
        $passwordHashed = $this->formControl->hashPassword($cleanBody['password']);
        $token = bin2hex($email);

        $this->auth->register($cleanBody['firstname'], $cleanBody['lastname'], $email, $passwordHashed, $token);

        header("HTTP/1.0 200 OK");
        return ['message' => 'Félicitation Votre compte est créer !! Veuillez vous connecter'];
    } else {
        header("HTTP/1.0 400 Bad Request");
        return ['message' => 'Erreur lors de la création de votre compte'];
    }
}

}
