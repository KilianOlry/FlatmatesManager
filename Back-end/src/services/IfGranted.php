<?php

namespace App\Services;

use \PDO;
use \App\Models\SqlConnect;

class ifGranted extends SqlConnect {

    public function ifExist($cookieEmail) {
      $req = $this->db->prepare('SELECT id, role FROM users WHERE email = :email');
      $req->execute(['email' => $cookieEmail]);
      $user = $req->fetch(PDO::FETCH_ASSOC);
      return $user ?: false;
    }

    public function getByToken(string $token) {
      $req = $this->db->prepare('SELECT id FROM users WHERE token = :token');
      $req->execute(['token' => $token]);
      $user = $req->fetch(PDO::FETCH_ASSOC);
      return $user ?: false;
    }
}