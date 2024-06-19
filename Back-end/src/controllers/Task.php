<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\TaskModel;
use App\Models\CategoryModel;
use App\Models\UserModel;

class Task extends Controller {
  protected object $task;
  protected object $category;
  protected object $user;
  public $formControl;

  public function __construct($param) {
    $this->task = new TaskModel();
    $this->category = new CategoryModel();
    $this->user = new UserModel;

    parent::__construct($param);
  }

  public function postTask() {

    $this->formControl = new FormControl();

    if (in_array('add', $this->params)) {
      $message = $this->formControl->cleanInput($this->body['description']);
      $createdAt = date('Y-m-d H:i:s');
      $dateLimit = $this->formControl->cleanInput($this->body['date']);
      $priority = $this->formControl->cleanInput($this->body['priority']);
      $category = $this->formControl->cleanInput($this->body['category']);
      $categoryId = $this->category->getByName($category);
      $user = $this->user->ifExist($this->body['tokenUser']);
      $flatmate = $this->formControl->cleanInput($this->body['flatmates']);
      $payor = $this->user->getByName($flatmate);

      return $this->task->add($message, $createdAt, $dateLimit, $priority, $categoryId['id'], $payor['id'], $user['home_id']);
    
    }

  }

  public function deleteTask() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getTask() {
    if (in_array('getAll', $this->params)) {
      return $this->task->getAll();
    } else {
      return $this->task->get(intval($this->params['id']));
    }
  }

  public function putTask() {
    return $this->task->update($this->body[0]);
  }
}
