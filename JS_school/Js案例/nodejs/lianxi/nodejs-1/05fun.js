//匿名函数 自调
// (function(){
//     console.log('匿名函:1');
// })();

//将匿名函数改为箭头函数
(()=>{
    console.log('匿名函:1');
})();

// (function(n1,n2){
//     console.log(n1+n2);
// })(20,30);

((n1,n2)=>{
    console.log(n1+n2);
})(20,30);

// +function(m){
//     console.log("匿名函数3:"+m)
// }('abc');
// (function(i){
//     console.log(`自调函数a ${i}`);
// })(5)

((i)=>{
    console.log(`自调函数a ${i}`);
})(5);


// es6新增
(function(num){
  // console.log("第四种")
    if(num>0){
        //在函数体内部再次执行当前函数体，使用arguments
        arguments.callee(num-1);
        //arguments.callee理解为这个函数
        console.log(num);
    }
})(5);


