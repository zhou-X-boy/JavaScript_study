//1判断是否支持该编码 Buffer.isEncoding();
console.log('是否支持utf8',Buffer.isEncoding('utf8'));
console.log('是否支持utf-8',Buffer.isEncoding('utf-8'));
console.log('是否支持hex',Buffer.isEncoding('hex'));
console.log('是否支持ascii',Buffer.isEncoding('ascii'));
console.log('是否支持gbk',Buffer.isEncoding('gbk'));
console.log('是否支持base64',Buffer.isEncoding('base64'));

//2判断是否为Buffer Buffer.isBuffer();
let buf21=Buffer.from('haha');
console.log(Buffer.isBuffer(buf21));
let buf22={};
console.log(Buffer.isBuffer(buf22));
let buf23=[1,2,3];
console.log(Buffer.isBuffer(buf23));

//3返回字节长度Buffer.byteLength()
let buf3=Buffer.from('haha');
console.log(Buffer.byteLength(buf3));

//4 concat 拼接
let buf41=Buffer.alloc(10);
let buf42=Buffer.alloc(5);
let buf43=Buffer.alloc(3);
console.log(Buffer.concat([buf41,buf42,buf43]));
