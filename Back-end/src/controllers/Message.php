<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\MessageModel;
use App\Models\UserModel;
use App\Services\FormControl;

class Message extends Controller {
  protected object $message;
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->message = new MessageModel();
    $this->user = new UserModel();

    parent::__construct($param);
  }

  public function postMessage() {
    $this->formControl = new FormControl();
    
    if (in_array('add', $this->params)) {

      $cleanBody = $this->formControl->sanitizeInput($this->body);

      if (in_array(false, $cleanBody)) {

        header("HTTP/1.0 406 Not Acceptable");
        return ['message' => 'Erreur veuillez remplir tous les champs'];
      }

      $user = $this->user->getByTokenAllInformations($cleanBody['userToken']);

      if ($user) {

        $created_at = date('Y-m-d H:i:s');
        $this->message->add($cleanBody['title'], $cleanBody['message'], $created_at, $user['id'], $user['home_id']);
        
        header("HTTP/1.0 200 OK");
        return ['message' => 'message crée avec succès'];
      }

    }
    
  }

  public function deleteMessage() {
    return $this->message->delete(intval($this->params['id']));
  }

  public function getMessage() {
    
    $userExist = $this->user->getByTokenAllInformations($this->params['id']);

    if ($userExist) {
      
      return $this->message->getAll($userExist['home_id']);

    }
  }

}
