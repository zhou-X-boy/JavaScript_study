<?php
header('Content-Type: text/json'); 
$_uname = $_REQUEST['uname'];
$_password = $_REQUEST['password'];
$_sc = $_REQUEST['sc'];
$_info = $_REQUEST['info'];

$arr=[
    'uname'=>$_uname,
    'password'=>$_password,
	'sc'=>$_sc,
	'info'=>$_info
];
echo json_encode($arr);
?>