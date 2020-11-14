//操作文件

//导入fs模块
const fs=require('fs');

//判断文件是否存在
let file1='./lianxi/modules/10-fs/a.txt';
fs.stat(file1,(err,stats)=>{
    if(err){
        console.log('文件不存在');
    }else{
        console.log('文件存在');

        //读取文件
        fs.readFile(file1, (err,data)=>{
            console.log('该文件内的内容',data.toString());
        });	

        //向文件中写入内容 会替换原来的内容
        let fileNew='./lianxi/modules/10-fs/b.txt';
        let info1='abcdefg';
        fs.writeFile(fileNew,info1,(err)=>{
            if(err) throw err;
        });

        //向文件末尾追加内容
        let info2='hijklmn';
        fs.appendFile(file1,info2,(err)=>{
            if(err) throw err;
        });

        //删除文件
        let filedel='./lianxi/modules/10-fs/d.txt'
        fs.unlink(filedel,(err)=>{
            if(err) throw err;
        });

        //重命名
        let file2="./lianxi/modules/10-fs/c.txt";
        let Newfile="./lianxi/modules/10-fs/newc.txt";
        fs.rename(file2,Newfile,(err)=>{
            if(err) throw err;
        });
    }
})




