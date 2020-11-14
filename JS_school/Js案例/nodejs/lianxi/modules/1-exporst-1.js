//要被导出的模块
console.log('被导出的模块',(require.main===module));
var age=20;
const PI=3.14;
var ss=function(r){
    return PI*r*r;//圆的面积
}
var ll=function(r){
    return PI*r*2;//圆周长
}
//导出模块的对象/函数/变量
module.exports.age=age
//exports.age=age;
exports.ss=ss;
exports.ll=ll;