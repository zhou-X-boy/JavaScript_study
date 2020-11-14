//node.js全局对象global
//window.console.log(this);
//console：用于向stdout（标准输出）和stderr（标准错误）输出信息

    // console.log();	//向stdout输出日志信息
    // console.info();	//同上
    // console.error();    //向stderr输出错误信息
    // console.warn();	//同上
    // console.trace(); 	//向stderr输出栈轨迹信息 ----了解
    // console.dir();	//向stdout输出指定对象的字符串表示 完全一致。


 var age=20;
console.log(age);
console.log(global.age);//输出undefined

//在浏览器控制台输出window.age
// console.log(window.age);//会报错，但是在html中应用不会报错