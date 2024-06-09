<?php

namespace App\Models;

use \PDO;
use stdClass;

class UserModel extends SqlConnect {
    public function add($firstname, $lastname, $email, $passwordHashed, $token) {
      $query = 'INSERT INTO users (firstname, lastname, email, password, token)
                VALUES (:firstname, :lastname, :email, :password, :token)';

      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':firstname' => $firstname,
        ':lastname' => $lastname,
        ':email' => $email,
        ':password' => $passwordHashed,
        ':token' => $token,
      ]);
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM users WHERE id = :id");
      $req->execute(["id" => $id]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM users WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getByName(string $name) {
      $req = $this->db->prepare("SELECT id FROM users WHERE firstname = :firstname");
      $req->execute(["firstname" => $name]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM users ORDER BY id DESC LIMIT 1");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function ifExist($token) {
      $req = $this->db->prepare('SELECT * FROM users WHERE token = :token');
      $req->execute(['token' => $token]);
      $user = $req->fetch(PDO::FETCH_ASSOC);
      return $user ?: false;
    }

    public function update() {
      return 'bonjour';
    }
}