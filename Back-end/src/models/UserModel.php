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

    public function get(int $id) {
      $req = $this->db->prepare("SELECT id, firstname, lastname, email, role, token, home_id FROM users WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getByName(string $name) {
      $req = $this->db->prepare("SELECT id FROM users WHERE firstname = :firstname");
      $req->execute(["firstname" => $name]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getUsersWithoutFlatmates($word) {
      $query = "SELECT * FROM users WHERE firstname LIKE :word AND home_id IS NULL";
      $req = $this->db->prepare($query);
      $req->execute(["word" => $word . '%']);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function ifExist($token) {
      $req = $this->db->prepare('SELECT * FROM users WHERE token = :token');
      $req->execute(['token' => $token]);
      $user = $req->fetch(PDO::FETCH_ASSOC);
      return $user ?: false;
    }

    public function updateUserJoinHome(int $userId, int $homeId) {
      $query = "UPDATE users SET home_id = :homeId WHERE id = :userId";
      $stmt = $this->db->prepare($query);
      $stmt->execute([
        ':homeId' => $homeId,
        ':userId' => $userId,
      ]);
    }
}