<?php

namespace App\Models;

use \PDO;
use stdClass;

class CategorieExpensesModel extends SqlConnect {
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

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM categorys_task WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getByName(string $name) {
      $req = $this->db->prepare("SELECT id FROM categorys_expense WHERE name = :name");
      $req->execute(["name" => $name]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }
}