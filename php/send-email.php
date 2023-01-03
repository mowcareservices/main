<?php
  $to = "admin@mowcareservices.com.au";
  $subject = "Email from HTML form";
  $message = "Name: " . $_POST["name"] . "\n" .
             "Email: " . $_POST["email"] . "\n" .
             "Message: " . $_POST["message"];
  $headers = "From: sender@example.com" . "\r\n";

  mail($to, $subject, $message, $headers);
?>