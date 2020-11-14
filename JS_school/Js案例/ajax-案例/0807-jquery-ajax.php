<?php
//设置响应消息头部,text/plain的意思是将文件设置为纯文本的形式
header('Content-Type: text/json'); 
//PHP的关联数组
$arr=[
'ename'=>'tom',
'age'=>20,
];

//把PHP数组编码为JSON格式字符串
// echo $arr;
echo json_encode($arr);