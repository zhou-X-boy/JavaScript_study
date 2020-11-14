//global全局对象的成员属性和成员方法:console

//1 console.log的小括号里可以输出多项，包括数值，字符串，布尔值，对象
    console.log(1,'how',true,new Date());

    //console.log拼接
    var obj1={
        myname:'小明',
        age:20
    }
    console.log('my name is'+obj1.myname);
    console.log(`my name is ${obj1.age}`);

    //console.log：百分位占位符：--对应后面的参数值
    console.log('我的名字：%s,我的年龄：%d',obj1.myname,obj1.age);
    //%s 字符串类型的数据
    //%d 数字类型的数据


//2 console.info 同上
console.info(`你是？ ${obj1.myname}`);

//3 console.error() 同样输出以上信息,查看区别
console.error(`你多大？ ${obj1.age}`);

//4 console.warn
console.warn("my name is"+obj1.myname);

//5 console.trace向错误轨迹stderr输出轨迹信息
// console.trace("my name is"+obj1.myname);

//6 console.dir向标准输出，输出指定对象的字符串
console.dir("dir输出"+obj1.myname);

//比较console.log和console.dir
function F1(){
    this.name="test";
}
F1.prototype.sayHi=function(){
    console.log("HELLO");
}
console.log(F1());
console.dir(F1());

//console.time和console.timeEnd
console.time('test');
var sum=0;
for(var i=0;i<10000;i++){
    sum+=1;
}
console.log(sum);
setTimeout(function(){
    console.info('计时结束了吗？');
},5000);
console.timeEnd('测试代码执行时间');

//console.assert()断言真假
function add(n1,n2){
    return n1+n2;
}
//断言为真，不会输出信息
console.assert(add(1,2)==3,"1+2等于3，不会会输出")
//断言为假，输出自定义信息
console.assert(add(1,2)==4,"1+2不等于4，会输出")

