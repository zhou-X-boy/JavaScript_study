//http模块的服务端工具
const http=require('http');
const url=require('url');


//1 创建web服务器 没有客户端响应
let server=http.createServer();
//2 为服务器也是http.Server对象的request事件绑定处理函数
//request事件是接收到请求消息
server.on('request',(req,res)=>{
    console.log('web服务器接收到一个请求...');
    console.log(req.url);
   //设置响应数据
   let url1=req.url;
   let info=url.parse(url1).pathname;
   console.log(info);
   //2 获得客户端请求的文件index.html
     //1 读取文件readFile()
     let file1='.'+info;
     fs.readFile(file1,(err,data)=>{
         if(err){
             console.log('文件读取失败');
         }else{
             console.log('文件读取成功');
        //设置响应主体内容
            //1 设置响应状态码
            res.statusCode=200;
            //2 设置响应消息头部 response.setHeader(name,value)
            res.setHeader("content-type","text/html;charset=utf8");
            //3 向客户端输出的响应主体内容
            res.write(data);
            //4 响应主体内容完毕,向客户端发送响应
            res.end();
         }
     });
});

//3 启动服务器，并监听指定端口
server.listen(8000,'127.0.0.1',(err)=>{
    if(err){
        console.log(`web服务器启动失败，错误消息是：,${err}`);
    }else{
        console.log(`web服务器启动成功，正在监听8000端口`);
    }
})