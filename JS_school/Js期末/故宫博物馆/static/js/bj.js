$(function(){
    var tabTimer;
    var len = $(".tab .tabCons .con").length;
    var i = 0;
    $(".tab .tabCons .con:gt(0)").hide(); //默认显示第一内容部分
    //鼠标滑上选项标签停止自动播放，滑出时开始自动播放
    $(".tab .tabMenus").hover(function(){
        clearInterval(tabTimer);
    },function(){
        tabTimer = setInterval(function(){
            if( i < len ){
                $(".tab .tabCons .con").eq(i).show().siblings().hide();
                i++;
            }else{
                i = 0;
            }
        },900);
    }).trigger("mouseleave");
});
