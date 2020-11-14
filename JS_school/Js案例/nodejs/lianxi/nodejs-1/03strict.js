// "use strict"
// const  PI=3.14;
// console.log(PI);
var a=20;
console.log(a);
var r=10;
const PI=3.14;
var l=2*PI*r;
console.log(l);

//匿名函数中的this不在指应全局
(function(){
   console.log(this);
})
(function(){
    "use strict"
    console.log(this);
})

// 对比普通模式与严格模式
"use strict"
a=10;//严格模式下：未声明变量赋值--会报错
console.log(a);

// const PI=3.14;
//PI=3.1415926;//严格模式下：修改常量值--会报错
console.log(PI);
//匿名函数的this指向
(function(){
    console.log(this);
    "use strict"
    console.log(this);
})
