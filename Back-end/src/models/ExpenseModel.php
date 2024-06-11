<?php

namespace App\Models;

use \PDO;
use stdClass;

class ExpenseModel extends SqlConnect {
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
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM tasks WHERE id = :id");
      $req->execute(["id" => $id]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT tasks.*, categorys_task.* FROM tasks
                                INNER JOIN categorys_task ON tasks.category_id = categorys_task.id
                                WHERE tasks.user_id = :id AND tasks.status != :status 
                                ORDER BY tasks.date_limit DESC");
      $req->execute(["id" => $id, "status" => "Terminé"]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getAll() {
      $req = $this->db->prepare("SELECT COLUMN_TYPE FROM INFORMATION_SHEMA.COLUMNS WHERE TABLE_NAME = 'tasks' AND COLUMN_NAME = 'priority'");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM tasks ORDER BY id DESC LIMIT 1");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function update(int $id) {
        $query = "UPDATE tasks SET status = 'Terminé' WHERE category_id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->execute([
          ':id' => $id,
        ]);
        return 'ok';
    }
}