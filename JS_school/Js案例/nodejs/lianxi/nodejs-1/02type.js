//原始类型
var name="my name is tom"
var age=22;
var isReading=true;
var info;
console.log(info);//未定义
var qq=null;//空
console.log(name,age,info,qq);


var strl=new String('hao are you');
var arr=new Array();
var obj1=new Object();
obj1.name='tom';
obj1.age=20;
obj1.info=function(){
    console.log(obj1.name+'is'+obj1.age);
}

//构造函数
function Myfun(uname,uage){
    this.uname=uname;
    this.uage=uage;
}
var myfun1=new Myfun('tom',20);
console.log(myfun1.uname);
console.log(myfun1.uage);

//模板字符
var empname='ket';
var empage=20;
var emppart='xinxi';
//var empinfo='员工名：'+empname
var empinfo=`
            员工名:${empname},
            员工年龄:${empage},
            员工所属部门:${emppart}`
console.log(empinfo);
var price=1;
var num=2;
console.log(`
             单价:${price},
             数量:${num},
             总价:${price*num},
             是否超出预算:${price*num>10?'超了':'还可以继续'}`)
