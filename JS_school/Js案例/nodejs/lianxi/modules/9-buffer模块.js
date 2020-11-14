//buffer模块，无需引入，可直接使用

//实例化buffer对象

//1 被抛弃new Buffer(size)
let buf1=new Buffer(4);
console.log(buf1);

//2 Buffer.alloc(size[,fill,endcoding]);
let buf21=Buffer.alloc(1);
console.log(buf21);
let buf22=Buffer.alloc(6);
buf22[0]=10;
console.log(buf22);
let buf23=Buffer.alloc(4,'hello');
console.log(buf23);
console.log(buf23.toString());
let buf24=Buffer.alloc(6,'中国');
console.log(buf24);
console.log(buf24.toString());

//3 Buffer.from(?)
console.log(Buffer.from("world"))
console.log(Buffer.from("world").toString());

//3 Buffer.from(array)
let buf3=Buffer.from([0x61,0x62,0x63]);//数组内是十六进制数的数据
console.log(buf3);
console.log(buf3.toString());
console.log(Buffer.from([97,98,99]).toString());//数组内是十进制数的数据

//3 Buffer.from(buffer)
const buf31=Buffer.from('buffer');
const buf32=Buffer.from(buf31);
console.log(buf31);
buf31[0]=0x61;
console.log(buf31);
//Prints:auffer
console.log(buf31.toString());
//Prints:Buffer
console.log(buf32.toString());

let buf41=Buffer.from('中国','utf8')
//默认编码格式是utf8
console.log(Buffer.byteLength(buf41,'utf8'));

let buf42=Buffer.from('中国','ascii')
console.log(Buffer.byteLength(buf42,'ascii'));

let buff1=Buffer.from('0123abc','ascii');
console.log(buff1,Buffer.byteLength(buff1));  //返回<Buffer 30 31 32 33 61 62 63>

let buff2=Buffer.from('0123abc','base64');
console.log(buff2,Buffer.byteLength(buff2)); //返回<Buffer d3 5d b7 69 b7>

