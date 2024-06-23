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

    public function getById(string $table, int $id) {
      $req = $this->db->prepare("SELECT * FROM " . $table .  "WHERE id = :id");
      $req->execute(["table" => $table, "id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getAll(string $table) {
      $query = 'SELECT * FROM ' . $table;
      $req = $this->db->prepare($query);
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast(string $table) {
      $query = 'SELECT * FROM' . $table . 'ORDER BY id DESC LIMIT 1';
      $req = $this->db->prepare($query);
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getByString(string $table, string $word) {
      $query = "SELECT * FROM " . $table . " WHERE firstname LIKE :word";
      $req = $this->db->prepare($query);
      $req->execute(["word" => $word . '%']);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

}