//get 发送请求
const http=require('http');
const url=require('url');

let url1='http://www.baidu.com/?tn=78040160_14_pg&ch=8';
let url2={
    protocal:'http:',
    hostname:'www.baidu.com',
    query:'tn=78040160_14_pg&ch=8',
    method:'post'
}
console.log(url.parse(url1));

//request()方法返回2个对象reg,res
//reg是http.ClientRequest对象（关于请求消息）
//res是http.IncomingMessage对象（关于响应消息）
let req=http.request(url2,(res)=>{
    //res响应消息
    console.log('响应消息状态码：',res.statusCode);
    // console.log('响应消息头部',req.headers);
    res.on('data',(chunk)=>{
        console.log('响应主体',chunk);
        console.log('数据片段分隔-----------\r\n');
        console.log(chunk.toString());
    })
});

//req对象请求超时
req.setTimeout(2000,(err)=>{
    console.log('请求超时');
    //终止请求
    req.abort();
});
//req对象的请求错误事件触发,使用on监听事件的触发
req.on('error',(err)=>{
    console.log('请求错误',err);
});
//request()请求方法，需要手动提交，请求消息主体结束
req.end();