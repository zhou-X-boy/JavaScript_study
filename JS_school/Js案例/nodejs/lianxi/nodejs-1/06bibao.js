//闭包

//每隔一秒打印出 1 2 3 4 5
for(var i=1;i<=5;i++){
    //console.log(i);
    setTimeout(outer(i),1000*i);
};
function outer(num){
    return function inner(){
        console.log(num);
    }
}
for (var i=1;i<=5; i++){
    setTimeout(
        (
            mun=> {
            return ()=> {
                console.log(mun);
            }
        })(i),1000*i);
};
