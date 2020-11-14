//path模块
const path=require("path");

//1 path(str)//解析一个路径为对象，参数为路径字符串
let path11="F:\\WebStrom\\nodejs\\modules";
let path12="F:/nodejs/modules";
console.log('path1',path.parse(path11));
console.log('path2',path.parse(path12));

//2 format(obj)//将对象反向解析为一个路径字符串，参数为对象
let obj2={
    root:'F:/',
    dir:'F:/WebStrom/nodejs',
    base:'modules',
    ext:'',
    name:'modules'
}
let path2=path.format(obj2);
console.log('path2:',path2);

//3 join()连接路径，会自动使用当前系统路径为分隔符
console.log(path.join('p','a','t','h','abc.js'));

//4 resolve(path0,path1)//根据基础路径解析出目标路径的绝对路径
let path41="/nodejs/modules";
let path42="./6-path.js";
console.log(path.resolve(path41,path42));

console.log(path.resolve('/foo/bar','./baz')); // \foo\bar\baz 拼接
console.log(path.resolve('/foo/bar','baz')); // \foo\bar\baz
console.log(path.resolve('/foo/bar','/baz')); // \baz
console.log(path.resolve('/foo/bar','../baz')); // \foo\baz

//5 relative(form,to) 根据基础路径，获取目标路径与其的相对关系
let path51="E:/WebStrom/nodejs/modules";
let path52="E:/WebStrom/nodejs/nodejs-1";
console.log(path.relative(path51,path52));

