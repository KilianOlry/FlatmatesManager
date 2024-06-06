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

    public function verifyTokenHome($homeToken) {
      $req = $this->db->prepare('SELECT token, id FROM homes WHERE token = :token');
      $req->execute(['token' => $homeToken]);
      $home = $req->fetch(PDO::FETCH_ASSOC);
      return $home ?: false;
    }
}