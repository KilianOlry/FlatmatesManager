<?php

namespace App\Models;

use \PDO;
use stdClass;

class CategoryModel extends SqlConnect {
    public function add($name, $description, $created_at, $date_limit, $status, $priority, $category_id) {
      $query = 'INSERT INTO tasks (name, description, created_at, date_limit, status, priority, category_id)
                VALUES (:name, :description, :created_at, :date_limit, :status, :priority, :category_id)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':name' => $name,
        ':description' => $description,
        ':created_at' => $created_at,
        ':date-limit' => $date_limit,
        ':status' => $status,
        ':priority' => $priority,
        ':category_id' => $category_id,
      ]);
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM tasks WHERE id = :id");
      $req->execute(["id" => $id]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM categorys_task WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getAll() {
      $req = $this->db->prepare("SELECT * FROM categorys_task");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM tasks ORDER BY id DESC LIMIT 1");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }
}