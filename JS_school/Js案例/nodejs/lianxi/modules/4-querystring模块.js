//查询字符串
let str="uname=tom&uage=20&uclass=201801";
const qs=require("querystring");
//parse()将查询字符串解析为对象
console.log(qs.parse(str));

//stringify()将对象转为字符串
let obj1=qs.parse(str);
console.log(qs.stringify(obj1));

let obj2={
    foo:'bar',
    abc:'xyz',
    word:'nodejs'
};
//console.log(qs.stringify(obj2));
let str2=qs.stringify(obj2,';',':');//stringify()将对象转为查询字符串
console.log(str2);
