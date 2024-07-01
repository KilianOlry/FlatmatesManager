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
      return $stmt->rowCount() > 0;
    }

    public function getFlatmates($id) {
      $req = $this->db->prepare("SELECT * FROM users  INNER JOIN homes ON users.home_id = homes.id
                                WHERE homes.id = :home_id");
      $req->execute([
        ':home_id' => $id
      ]);
      
      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM categorys_task WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

}