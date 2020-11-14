// //获取主模块对象
// console.log(process.mainModule);
// console.log(require.main);
// //判断当前模块是否为主模块
// console.log(require.main===module);



//导入模块
// var fs=require('fs');
// fs.createReadStream('./out.js');

//导入一个模块
console.log('导入其他模块的模块：',(require.main===module));
var rq=require('./1-exporst-1.js'); // ./表示当前目录
console.log(rq.age);
console.log(rq.ss(2).toFixed(2));
console.log(rq.ll(2).toFixed(2));

//导入模块
// var rq1=require('./1-exporst-2.js');
// var Z=new rq1(10);//new实例化函数
// console.log(Z.age);
// console.log(Z.mj());//使用构造函数中的方法
// console.log(Z.zc());


