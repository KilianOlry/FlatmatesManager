<?php

namespace App\Models;

use \PDO;
use stdClass;

class AuthModel extends SqlConnect {
    public function register($firstname, $lastname, $email, $passwordHashed, $token) {
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

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM users WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getByToken(string $token) {
      $req = $this->db->prepare("SELECT home_id, role FROM users WHERE token = :token");
      $req->execute(["token" => $token]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function ifExist(string $email) {
      $req = $this->db->prepare('SELECT * FROM users WHERE email = :email');
      $req->execute(['email' => $email]);
      $user = $req->fetch(PDO::FETCH_ASSOC);
      return $user;
    }

}