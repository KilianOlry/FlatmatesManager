<?php

namespace App\Models;

use \PDO;
use stdClass;

class TaskModel extends SqlConnect {

  public function add ($message, $createdAt, $dateLimit, $priority, $categoryId, $worker, $homeId) {
      $query = 'INSERT INTO tasks (description, created_at, date_limit, priority, category_id, user_id, home_id)
                VALUES (:message, :created_at, :date_limit, :priority, :category_id, :worker, :home_id)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':message' => $message,
        ':created_at' => $createdAt,
        ':date_limit' => $dateLimit,
        ':priority' => $priority,
        ':category_id' => $categoryId,
        ':worker' => $worker,
        ':home_id' => $homeId,
      ]);
      return $stmt->rowCount() > 0;
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT tasks.id AS task_id, tasks.*, categorys_task.* FROM tasks
                                INNER JOIN categorys_task ON tasks.category_id = categorys_task.id
                                WHERE tasks.user_id = :id AND tasks.status != :status
                                ORDER BY tasks.date_limit DESC");
      $req->execute(["id" => $id, "status" => "Terminé"]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function update(int $id) {
        $query = "UPDATE tasks SET status = 'Terminé' WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->execute([
          ':id' => $id,
        ]);
      return $stmt->rowCount() > 0;
    }
}