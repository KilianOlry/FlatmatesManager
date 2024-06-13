<?php

namespace App\Models;

use \PDO;
use stdClass;

class MessageModel extends SqlConnect {
    public function add(string $title, string $message, $created_at, int $user_id, int $home_id) {
      $query = 'INSERT INTO messages (title, content, created_at, user_id, home_id)
                VALUES (:title, :content, :created_at, :user_id, :home_id)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':title' => $title,
        ':content' => $message,
        ':created_at' => $created_at,
        ':user_id' => $user_id,
        ':home_id' => $home_id
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

    public function getAll(int $homeId) {
      $req = $this->db->prepare("SELECT * FROM messages WHERE home_id = :home_id");

      $req->execute(['home_id' => $homeId]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM tasks ORDER BY id DESC LIMIT 1");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }
}