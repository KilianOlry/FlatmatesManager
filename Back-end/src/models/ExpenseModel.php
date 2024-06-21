<?php

namespace App\Models;

use \PDO;
use stdClass;

class ExpenseModel extends SqlConnect {
    public function add ($price, $message, $createdAt, $dateLimit, $categoryId, $worker, $homeId) {
      $query = 'INSERT INTO expenses (price, description, created_at, date_limit, category_id, user_id, home_id)
                VALUES (:price, :message, :created_at, :date_limit, :category_id, :worker, :home_id)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':price' => $price,
        ':message' => $message,
        ':created_at' => $createdAt,
        ':date_limit' => $dateLimit,
        ':category_id' => $categoryId,
        ':worker' => $worker,
        ':home_id' => $homeId,
      ]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT expenses.id AS expense_id, expenses.*, categorys_expense.* FROM expenses
                                INNER JOIN categorys_expense ON expenses.category_id = categorys_expense.id
                                WHERE expenses.user_id = :id AND expenses.status = :status
                                ORDER BY expenses.date_limit DESC");
      $req->execute(["id" => $id, 'status' => 0]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }


    public function update(int $id) {
        $query = "UPDATE expenses SET status = 1 WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->execute([
          ':id' => $id,
        ]);
    }
}