<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    $phone=$_POST['phone'];
    $newpassword=$_POST['Newpassword'];
    $connect=new mysqli("localhost","root","123456","list");
    $update="update user set password={$newpassword} where phone={$phone};";
    if($connect->query($update)===true) {
        echo "修改成功";
    }
?>