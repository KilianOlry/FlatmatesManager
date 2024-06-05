<?php

namespace App\Models;

use \PDO;
use stdClass;

class HomeModel extends SqlConnect {
    public function add($adress, $name, $token) {
      $query = 'INSERT INTO homes (adress, name, token)
                VALUES (:adress, :name, :token)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':adress' => $adress,
        ':name' => $name,
        ':token' => $token,
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