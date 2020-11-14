//util工具模块

const util=require("util");//导入模块

//1 foemat() 使用带占位符的方式格式化字符串
console.log(util.format("myname is %s , myage is %d",'tom','20'));

console.log(util.format(1,2,3));

//2 inspect //返回一个对象的字符串表示
let obj2={
    drink:'coco',
    price:5,
    count:10
};
console.log(util.inspect('返回一个对象的字符串表示：',obj2));
console.log(typeof(util.inspect(obj2)));

//3 util.inherits(son,father) //是用来实现对象间原型继承的函数
function Father(){
    this.name='aidi';
}
Father.prototype.drink="水";//向构造函数添加新的属性

function Son(){
    this.name='adidson';
}
util.inherits(Son,Father);
let son1=new Son();//实例化Son
console.log('son1的名字',son1.name);
console.log('son1的饮料',son1.drink);