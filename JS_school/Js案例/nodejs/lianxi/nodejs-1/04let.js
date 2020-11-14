//全局作用域，局部作用域
var name="tom";
//函数声明
function myfun(){
    console.log(name);
    var myname=name;
    console.log(myname);
}
//调用函数
myfun();

//块级作用域let
var age=21;
if(age>20){
    let myage=age;
    console.log("块级作用域的变量"+myage);
}

for(var i=0;i<10;i++){
    console.log(i+'hello');
}
console.log(i+'world');