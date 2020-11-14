//使用fs模块创建两个文件
const fs=require("fs");//导入fs模块
let out=fs.createWriteStream('./out.log');//创建一个写入流文件
let err=fs.createWriteStream('./err.log');//创建一个错误流
const c=require("console");//导入console模块
let loger=new c.Console(out,err);//实例化
//上面的参数一 必填：可写的标准输出文件
//参数二 选填：可写的标准错误文件
loger.log('标准输出stdout');//向stdout(标准输出)输出信息
loger.error('标准错误')//向stderr(标准错误)输出信息

