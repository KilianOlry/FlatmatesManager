<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Services\FormControl;
use App\Models\TaskModel;
use App\Models\CategorieTasksModel;
use App\Models\UserModel;
use App\Services\QuerySql;

class Task extends Controller {
  protected object $task;
  protected object $category;
  protected object $user;
  protected object $serviceQuerySql;
  public $formControl;

  public function __construct($param) {
    $this->task = new TaskModel();
    $this->category = new CategorieTasksModel();
    $this->serviceQuerySql = new QuerySql();
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

      $task = $this->task->add($message, $createdAt, $dateLimit, $priority, $categoryId['id'], $payor['id'], $user['home_id']);
      
      if ($task) {
        header("HTTP/1.0 200 OK");
        return 'Tâche Crée avec succès';
      } else {
        header("HTTP/1.0 400 Bad Request");
        return 'Erreur lors de la création de la tâche';
      }
    }

  }

  public function deleteTask() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getTask() {

    if (in_array('', $this->params)) {
      return $this->serviceQuerySql->getAll('categorys_task');

    } else {

      return $this->task->get(intval($this->params['id']));

    }
  }

  public function putTask() {
    $task = $this->task->update($this->body[0]);
    if ($task) {
      header("HTTP/1.0 200 OK");
      return 'Tâche mise à jour';
    } else {
      header("HTTP/1.0 400 Bad Request");
      return 'Erreur lors de la mise à jour de la tâche';
    }
  }
}
