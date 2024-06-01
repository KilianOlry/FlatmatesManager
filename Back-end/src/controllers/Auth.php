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

    parent::__construct($param);
  }

  public function postAuth() {
      if (in_array('login', $this->params)) {
        
        return $this->login($this->body);

      } else if (in_array('register', $this->params)) {
        $this->register($this->body);
    }
  }


  public function login() {
    $this->formControl = new FormControl();

    $email = $this->formControl->verifyEmail($this->body['email']);

    if ($email) {
      $user = $this->auth->ifExist($email);
      if ($user) {

        if (password_verify($this->body['password'], $user['password'])) {
          
          session_start();

          $_SESSION['user'] = [
            'firstname' => $user['firstname'],
            'lastname' => $user['lastname'],
            'email' => $user['email'],
            'token' => $user['token']
          ];

          return $_SESSION['user'];

        } else {
          return header("HTTP/1.0 401 Unauthorized");
        }
      }
      else{
        return header("HTTP/1.0 401 Unauthorized");
      }
    }
  }

  public function register() {

    $this->formControl = new FormControl();

    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);
    
      if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $token = bin2hex($email);

      $this->auth->register($firstname, $lastname, $email, $passwordHashed, $token);
      return $this->auth->getLast();

    } else {
      return false;
    }

  }

  }
