<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    $connect=new mysqli("localhost","root","123456","list");
    $phone=$_POST["phone"];
    $pass=$_POST["password"];
    $select="select phone,password from user where phone={$phone};";
    $result=$connect->query($select);
    if($result->num_rows>0) {
        while($list=$result->fetch_assoc()) {
          if($list['password']==$pass) {
              echo json_encode(1);
          }else {
            echo json_encode(0);
          }
        }
    }else {
        echo json_encode(0);
    }
?>