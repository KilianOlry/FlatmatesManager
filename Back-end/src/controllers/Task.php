<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\TaskModel;

class Task extends Controller {
  protected object $task;
  public $formControl;

  public function __construct($param) {
    $this->task = new TaskModel();

    parent::__construct($param);
  }

  public function postTask() {
    $this->formControl = new FormControl();
    $email = $this->formControl->verifyEmail($this->body['email']);
    $firstname = $this->formControl->cleanInput($this->body['firstname']);
    $lastname = $this->formControl->cleanInput($this->body['lastname']);
    
      if ($email) {
      $passwordHashed = $this->formControl->hashPassword($this->body['password']);
      $this->task->add($firstname, $lastname, $email, $passwordHashed);

      return $this->task->getLast();
    } else {
      return false;
    }
  }

  public function deleteTask() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getTask() {
    return $this->task->get(intval($this->params['id']));
  }
}
