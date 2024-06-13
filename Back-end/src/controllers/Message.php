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
    
    if (in_array('add', $this->params)) {
      $title = $this->formControl->cleanInput($this->body['title']);
      $message = $this->formControl->cleanInput($this->body['message']);
      $created_at = date('Y-m-d H:i:s');
      $userId = intval($this->body['idUser']);
      $homeId = intval($this->body['idHome']);
      return $this->message->add($title, $message, $created_at, $userId, $homeId);
    }
    
  }

  public function deleteMessage() {
    return $this->message->delete(intval($this->params['id']));
  }

  public function getMessage() {
    return $this->message->getAll($this->params['id']);
  }

  public function buildDataMessage() {
    
  }
}
