<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\MessageModel;
use App\Services\FormControl;

class Message extends Controller {
  protected object $message;
  public $formControl;

  public function __construct($param) {
    $this->message = new MessageModel();

    parent::__construct($param);
  }

  public function postMessage() {
    $this->formControl = new FormControl();
    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);
    
      if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $this->message->add($firstname, $lastname, $email, $passwordHashed);

      return $this->message->getLast();
    } else {
      return false;
    }
  }

  public function deleteMessage() {
    return $this->message->delete(intval($this->params['id']));
  }

  public function getMessage() {
    return $this->message->getAll();
  }
}
