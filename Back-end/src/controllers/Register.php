<?php

namespace App\Controllers;

class Register
{

  public function cleanInput(string $inputValue) {
    $cleanInput = htmlspecialchars($inputValue);
    return $cleanInput;
  }
  
  public function verifyEmail(string $email)
  {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      return $email;
    } else {
      return false;
    }
  }

  public function hashPassword(string $password) {
    $passwordHashed = password_hash($password, PASSWORD_ARGON2ID);
    return $passwordHashed;
  }
}
