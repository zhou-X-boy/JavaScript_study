//要被导出的模块
const PI=3.14;
function Size(r){
    let age=30;
    this.mj=function(){
        return PI*r*r;
    }
    this.zc=function(){
        return PI*r*2;
    }
}
//导出构造函数
module.exporst=Size;
