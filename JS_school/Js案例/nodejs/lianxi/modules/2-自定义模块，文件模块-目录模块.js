//导入自定义模块-文件模块
//js后缀名
var ajs=require('./2-a.js');
console.log(ajs.data)
//没有后缀名
var a=require('./2-a');
console.log(a.data);
//json后缀名
var ajson=require('./2-a.json');
console.log(ajson.data);
//node后缀名


//导入自定义模块-目录模块//只需要引入目录名，被引入了他里面的目录方法
//包含了package.json
const a2=require('./2a/hello');
console.log(a2.data);
//包含了index.js文件
const a2js=require('./2ajs');
console.log(a2js.data);
//包含了index.json文件
const a2json=require('./2ajson');
console.log(a2json.data);


//node_modules目录，可省略目录/路径，直接写模块名称
// const node1=require('./2node_modules/index.js');
const node2=require('index.js');
console.log(node2.data);

const node3=require('index.json');
console.log(node3.data);
