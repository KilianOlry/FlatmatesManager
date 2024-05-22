<?php

namespace App\Services;

class FormControl
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

  public function checkMatchPassword(string $password, string $passwordVerify) {
    if ($password === $passwordVerify) {
      return $password;
    }
    else{
      return false;
    }
  }
}
