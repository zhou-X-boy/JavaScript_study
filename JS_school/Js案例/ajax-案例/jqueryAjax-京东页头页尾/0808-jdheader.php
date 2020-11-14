<!--页头-->
<?php
//设置响应消息头部,普通文本
header('Content-Type: text/html;charset=UTF-8'); 
?> 
<!-- 如果是json数据呢？ -->
<!-- {
    'uname':'tom',
    'age':20
} -->
<link rel='stylesheet' type='text/css' href='css/jd-header.css'>
<img src='images/logo.png' />
<ul class="nav">
    <li><a href="#">首页</a></li>
    <li><a href="#">新闻</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">登录</a></li>
</ul>
<hr>