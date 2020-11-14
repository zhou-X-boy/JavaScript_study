// fs模块 
const fs=require("fs");//引入fs模块

//1 fs.StatSync() 判断文件是否存在 同步+读取文件或目录
let path1="./lianxi";
let path2="./lianxi/modules/2-a";
console.log(fs.statSync(path1));//同步读取目录后返回一个对象
console.log(fs.statSync(path2));//同步读取文件
console.log(fs.statSync(path1).isDirectory());//stats对象的方法，判断是否为目录
console.log(fs.statSync(path2).isFile());//stats对象的方法，判断是否为文件

//异步
fs.stat(path2,(err,stats)=>{
    if(err){
        console.log('文件/目录读取失败')
    }else{
        console.log('文件/目录读取成功',stats);
        console.log(stats.birthtime);
    }
})

// 读取目录下的内容：
fs.stat(path2,(err,stats)=>{
    if(err){
        console.log('目录不存在');
    }else{
        console.log("目录存在");
        fs.readdir(path2,(err,list)=>{
            console.log(list);//查看log目录下的所有内容
        })
    }
})

// 1 读取文件 readFile( )
fs.readFile(path2,(err,data)=>{
    if(err){
        console.log('文件读取失败')
    }else{
        console.log('文件读取成功');
        // console.log('是文件么？',stats.isFile());
        // console.log('是目录么？',stats.isDirectory());
        console.log(data.toString());// buffer格式
    }
})
