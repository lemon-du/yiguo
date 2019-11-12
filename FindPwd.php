<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    $phone=$_POST['phone'];
    $connect=new mysqli("localhost","root","123456","list");
    $select="select *from user where phone={$phone};";
    $result=$connect->query($select);
    if($result->num_rows>0){
        echo 1;
    }else {
        echo 0;
    }
?>