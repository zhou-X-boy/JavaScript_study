//操作目录
const fs=require('fs');

let path1='./lianxi/modules/10-fs'
//先判断目录是否存在
fs.stat(path1,(err,stats)=>{
    if(err){
        console.log('当前目录不存在');
        //若不存在，创建目录
        fs.mkdir(path1,err=>{//异步
            if(err) throw err;
        });
    }else{
        console.log('当前目录已经存在');
        fs.readdir(path1,(err,files)=>{
            if(err){
                console.log('读取失败');
            }else{
                console.log('读取成功');
                console.log(files.toString());
            }
        });
        fs.readdir(path1,(err,list)=>{
            console.log(list);//查看目录下的所有内容
        })
        //若存在,删除目录
        // fs.rmdir(path1,err=>{//异步
        //     if(err) throw err;
        // });
    }
})


