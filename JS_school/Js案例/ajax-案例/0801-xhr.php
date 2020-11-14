<?php
//设置响应消息头部,普通文本
header('Content-Type: text/plain'); 

for($i=0; $i<10; $i++){
    echo $i.'hello';
}
?>