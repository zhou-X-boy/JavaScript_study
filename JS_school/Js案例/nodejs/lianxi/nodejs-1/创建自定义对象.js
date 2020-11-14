//2.new 创建原生对象
var obj2=new Object();
obj2.empname='tom';
obj2.emppart='开发部';
obj2.work=function(){
    return this.empname+' is working'+this.emppart;
}
console.log(obj2.work());

//2.new 创建构造函数
   //构造函数
   function Myfun(a1,a2){
       this.a1=a1;
       this.a2=a2;
       this.eat=function(){
           return this.a1+'和'+this.a2;
       }
   }
   //实例化函数
   var fun1=new Myfun(10,"软件");
   console.log(fun1.a1);
   console.log(fun1.a2);
   console.log(fun1.eat());

//3.原型继承
var parent={
    name:'abc',
    age:'20'
}
var son=Object.create(parent);
console.log(son.name);
console.log(son.age);

//4.class创建 自定义对象
class Stu{
    //构造函数
    constructor(sname,sage,sbook){
        this.sname=sname;
        this.sage=sage;
        this.sbook=sbook
    }
    //方法
    reading(){
        return `${this.sname} is ${this.sage},${this.sname} is reading ${this.sbook}`;
    }
}
    //实例化调用class对象
    var stu1=new Stu('小明',20,'阿衰');
    var stu2=new Stu('如果',19,'阿呆');
    console.log(stu1.sname+stu1.sage+stu1.sbook);
    console.log(stu1.reading());
    console.log(stu2.sname+stu2.sage+stu2.sbook);
    console.log(stu2.reading());


//class的继承
class Stuxinx extends Stu{
    //构造函数
    constructor(sname,sage,sbook,scalss){
        super(sname,sage,sbook);//super继承属性
        this.scalss=scalss;
    }
    //方法
    reading(){
        return super.reading()+this.sname+'所在班级是'+this.scalss;
    }
    skill(){
        return this.sname+'的特长:睡觉';
    }
}
var stuxx1=new Stuxinx('小黑',20,'时间简史',2);
console.log(stuxx1.sname+stuxx1.sage+stuxx1.sbook+stuxx1.scalss);
console.log(stuxx1.reading());
console.log(stuxx1.skill());