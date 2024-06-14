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
          
          session_start();

          $_SESSION['user'] = [
            'id' => $user['id'],
            'firstname' => $user['firstname'],
            'lastname' => $user['lastname'],
            'email' => $user['email'],
            'token' => $user['token'],
            'role' => $user['role'],
          ];
          
          header("HTTP/1.0 200 OK");
          return $_SESSION['user'];

        } else {

          header("HTTP/1.0 401 Unauthorized");
          return 'Email ou Mot de passe inccorect';
        }
      }
      else{
        header("HTTP/1.0 401 Unauthorized");
        return 'Email ou Mot de passe inccorect';
      }
    }
  }

  public function register() {
    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);

    if ($email) {
        $passwordHashed = $this->formControl->hashPassword($this->body['password']);
        $token = bin2hex($email);

        $this->auth->register($firstname, $lastname, $email, $passwordHashed, $token);

        header("HTTP/1.0 200 OK");
        return 'Félicitation Votre compte est créer !! Veuillez vous connecter';
    } else {
        header("HTTP/1.0 400 Bad Request");
        return 'Erreur lors de la création de votre compte';
    }
}

}
