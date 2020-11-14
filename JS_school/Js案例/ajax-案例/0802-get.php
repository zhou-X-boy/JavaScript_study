<?php
//设置响应消息头部,普通文本
// header('Content-Type: text/plain');    
$username=$_GET["username"];//获取账号
$password=$_GET["password"];//获取密码
//从这里面获取到的
// var url = "0802-get.php?username=" + username + "&password=" + password;


//接收客户端的请求数据 
if($username=="1234"&&$password=="abcd"){
echo 1; 
}
else{
echo 2;
}
?>