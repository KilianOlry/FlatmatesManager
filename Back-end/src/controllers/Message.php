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
      
      $cleanBody = $this->formControl->sanitizeInput($this->body);

      if(in_array(false, $cleanBody)) {
        header("HTTP/1.0 406 Not Acceptable");
        return ['message' => 'Erreur veuillez remplir tous les champs'];
      }

      $created_at = date('Y-m-d H:i:s');
      $userId = intval($this->body['idUser']);
      $homeId = intval($this->body['idHome']);
      $this->message->add($cleanBody['title'], $cleanBody['message'], $created_at, $userId, $homeId);

      header("HTTP/1.0 200 OK");
      return ['message' => 'message crée avec succès'];
    }
    
  }

  public function deleteMessage() {
    return $this->message->delete(intval($this->params['id']));
  }

  public function getMessage() {
    return $this->message->getAll($this->params['id']);
  }

}
