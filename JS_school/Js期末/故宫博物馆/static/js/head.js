$(function(){
    $('.child').hide();
    $('.nav ul .nav-li').hover(function(){//鼠标移入
	   //获取当前点击的li的下标位置
        var index=$(this).index();
        
        //让h-nav-x部分 .box1（第n个）显示,其他box1隐藏
        $('.nav_child').children('.child').eq(index).show('slow').siblings().hide();
        
    });
	$('.head').mouseleave(function(){
		$('.child').hide();
	});
});
// $(function(){
//     var tabTimer;
//     var len = $(".tab .tabCons .con").length;
//     var i = 0;
//     $(".tab .tabCons .con:gt(0)").hide(); //默认显示第一内容部分
//     //鼠标滑上选项标签停止自动播放，滑出时开始自动播放
//     $(".tab .tabMenus").hover(function(){
//         clearInterval(tabTimer);
//     },function(){
//         tabTimer = setInterval(function(){
//             if( i < len ){
//                 $(".tab .tabCons .con").eq(i).show().siblings().hide();
//                 i++;
//             }else{
//                 i = 0;
//             }
//         },2000);
//     }).trigger("mouseleave");
// });
