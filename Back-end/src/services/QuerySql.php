<?php

namespace App\Services;

use \PDO;
use stdClass;
use App\Models\SqlConnect;

class QuerySql extends SqlConnect {

    public function delete(string $table, int $id) {
      $req = $this->db->prepare("DELETE FROM " . $table .  "WHERE id = :id");
      $req->execute(["table" => $table,"id" => $id]);
    }

    public function get(string $table, int $id) {
      $req = $this->db->prepare("SELECT * FROM " . $table .  "WHERE id = :id");
      $req->execute(["table" => $table, "id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

}