//DNS模块
const dns=require('dns');//导入dns模块

//1 lookup()//把一个域名解析成一个ip地址，从操作系统中查询（缓存中）
dns.lookup(
    "www.baidu.com",
    (err,address,family)=>{//回调函数
        if(err){
            console.log('错误',err)
        }else{
            console.log('地址:',address);
            console.log('地址族:',family);
        }

    }
)

//2 resolve() //把域名解析成一个DNS的记录解析数据，从DNS服务器中查询
dns.resolve(
    "www.baidu.com",
    (err,records)=>{
        if(err){
            console.log(err);
        }else{
            console.log("records;",records)
        }
    }
)

//3 reverse() //吧一个ip地址反向解析成一组域名
dns.reverse(
    "50.63.202.104",
    (err,hostname)=>{
        if(err){
            console.log(err);
        }else{
            console.log(hostname);//大部分解析不出来，企业会设置禁止反向解析
        }
    }
)