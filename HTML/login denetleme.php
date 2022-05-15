<?php

$username = $_POST['username'];
$password= $_POST['password'];

if($username == "b211210582@sakarya.edu.tr" && $password == "b211210582") {
    echo "hoşgeldiniz ". $username;
}
else {
    echo "hata!!! kulannıcı adı veya şifre hatalıdır";
}

?>