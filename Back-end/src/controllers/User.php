<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\UserModel;

class User extends Controller {
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postUser() {
    $this->formControl = new FormControl();

      if (in_array('auth', $this->params)) {

        $email = $this->formControl->verifyEmail($this->body['email']);
        if ($email) {
          $user = $this->user->ifExist($email);

          if ($user) {
            if (password_verify($this->body['password'], $user['password'])) {

              session_start();
              $token = ($user['token']);

              $_SESSION['user'] = [
                'firstname' => $user['firstname'],
                'lastname' => $user['lastname'],
                'email' => $user['email'],
                'token' => $token
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

      } else if (in_array('add', $this->params)) {

        $email = $this->formControl->verifyEmail($this->body['email']);
        $firstname = $this->formControl->cleanInput($this->body['firstname']);
        $lastname = $this->formControl->cleanInput($this->body['lastname']);
        
          if ($email) {
          $passwordHashed = $this->formControl->hashPassword($this->body['password']);
          $token = $token = bin2hex($email);

          $this->user->add($firstname, $lastname, $email, $passwordHashed, $token);
          return $this->user->getLast();
    
        } else {
          return false;
        }
    }
  }

  public function deleteUser() {
    return $this->user->delete(intval($this->params['id']));
  }

  public function getUser() {
      return $this->user->get(intval($this->params['id']));
    }
  }
