//for...in遍历数组下标
var arr=[1,2,3,4];
for(var i in arr){
    console.log('第'+i+'个：'+arr[i]);
}
var obj={
    stuname:'aa',
    stugae:20,
    stuclass:1234
};
for(var i in obj){
    //console.log(i);//打印obj的属性名|成员名
    //console.log(obj[i]);//打印obj的属性值
    console.log(i+':'+obj[i]);
}
//for...of
var arr1=['tom',20,true,'abc'];
for(var i of arr1){
    console.log(i);
}