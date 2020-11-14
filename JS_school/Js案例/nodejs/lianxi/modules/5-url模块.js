//url模块
const url=require("url");//导入url模块
let str="http://www.gmxy.com:8081/pth/about.html?uname=rao&upwd=123#top";
//parse() 将url字符串解析为url的各个组成部分对象。
let obj1=url.parse(str,true);
console.log(obj1);

console.log('协议:',obj1.protocol);
console.log('主机名:',obj1.host);
console.log('端口号:',obj1.port);
console.log('路径名:',obj1.pathname);
console.log('hash:',obj1.hash);
console.log('超级链接:',obj1.href);
console.log('查询字符串',obj1.query);

let obj2={
    prrotocol:'http:',
    hostname:'www.baidu.com',
    port:'8081',
    hash:'#top',
    search:'?keyword=手机&abc=123'
}
console.log(url.format(obj2));
//resolve(from,to) //为url插入原有的标签/地址
//参数1：基地址
//参数2：相对地址
let url3="porject/path/index.html";
let url4="../a.jpg";
console.log(url.resolve(url3,url4));

console.log(url.resolve('/one/two/three','four'));
console.log(url.resolve('http://example.com','one'));
console.log(url.resolve('http://example.com','/one'));
console.log(url.resolve('http://example.com/one','/two'));
console.log(url.resolve('http://example.com/one','two'));