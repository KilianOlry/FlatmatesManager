<?php

namespace App\Models;

use \PDO;
use stdClass;

class CategorieTasksModel extends SqlConnect {

    public function getByName(string $name) {
      $req = $this->db->prepare("SELECT id FROM categorys_task WHERE name = :name");
      $req->execute(["name" => $name]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

}